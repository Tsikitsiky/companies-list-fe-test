import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import getCompanies from './api/getCompanies';
import { CompanyType, StateType } from './types';
import setCompanies from './actions/getCompanies';
import setCompaniesToDisplay from './actions/setCompaniesToDisplay';
import setCurrentPage from './actions/setCurrentPage';
import CompanyCard from './components/companyCard';

function App() {
  const dispatch = useDispatch();
  const { companies, companiesToDisplay,  currentPage } = useSelector((state: { task: StateType }) => state.task)
  const pageCounts = Math.ceil(companies?.length / 10)
  const arrays: any = []; // should be renamed to be more descriptive
  const chunkSize = 10;

  // Using useCallback here to improve performance /to cache the function as it's quite an expensive function
  const fetchCompanies = useCallback(async () => {
    const comp: CompanyType[] = await getCompanies()
    dispatch(setCompanies(comp))
  }, [])

  const handlePageChange = (nextPage: number) => {
    dispatch(setCurrentPage(nextPage))
  }

  useEffect(() => {
    fetchCompanies()
  }, [fetchCompanies])


  for (let i = 0; i < companies?.length; i += chunkSize) {
    const chunk = companies.slice(i, i + chunkSize);
    arrays.push(chunk)
  }

  useEffect(() => {
    const comp = arrays[currentPage - 1]
    dispatch(setCompaniesToDisplay(comp))
  }, [currentPage, arrays?.length])


  return (
    <div>
      <section>
        <table>
          <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Website</th>
          </tr>
          </thead> 
          <tbody>
           {companiesToDisplay?.map((c) => <CompanyCard c={c} key={c.id}/>)} 
          </tbody>
        </table>
        <div className='paginationContainer'>
          <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
          <button onClick={() => handlePageChange(1)}>1</button>
          <button onClick={() => handlePageChange(2)}>2</button>
          <button onClick={() => handlePageChange(3)}>3</button>
          <span>...</span>
          <button disabled={currentPage === pageCounts} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
      </section>
    </div>
  );
}

export default App;
