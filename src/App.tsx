import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  HStack,
  Button,
  Text,
  Stack
} from '@chakra-ui/react'

import './App.css';
import getCompanies from './api/getCompanies';
import { CompanyType, StateType } from './types';
import setCompanies from './actions/getCompanies';
import setCompaniesToDisplay from './actions/setCompaniesToDisplay';
import setCurrentPage from './actions/setCurrentPage';
import CompanyCard from './components/companyCard';

function App() {
  const dispatch = useDispatch();
  const { companies, companiesToDisplay, currentPage } = useSelector((state: { task: StateType }) => state.task)
  const pageCounts = Math.ceil(companies?.length / 10)
  const arrayOfChunks: any = [];
  const chunkSize = 10;

  const fetchCompanies = useCallback(async () => {
    const comp: CompanyType[] = await getCompanies()
    dispatch(setCompanies(comp))
  }, [companies])

  const handlePageChange = (nextPage: number) => {
    dispatch(setCurrentPage(nextPage))
  }

  useEffect(() => {
    fetchCompanies()
  }, [])


  for (let i = 0; i < companies?.length; i += chunkSize) {
    const chunk = companies.slice(i, i + chunkSize);
    arrayOfChunks.push(chunk)
  }

  useEffect(() => {
    const comp = arrayOfChunks[currentPage - 1]
    dispatch(setCompaniesToDisplay(comp))
  }, [currentPage, arrayOfChunks?.length])

  const isPrevDisabled = currentPage === 1
  const isNextDisabled = currentPage === pageCounts
  return (
    <Stack justifyContent={'center'} align={'center'}>
      <TableContainer w={'100%'}>
        <Table variant='striped' colorScheme='blue'>
          <Thead>
            <Tr>
              <Th isNumeric>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Website</Th>
            </Tr>
          </Thead>

          <Tbody>
            {companiesToDisplay?.map((c) => <CompanyCard c={c} key={c.id} />)}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack>
        <Button
          pointerEvents={isPrevDisabled ? 'none' : 'inherit'}
          disabled={isPrevDisabled}
          onClick={() => !isPrevDisabled && handlePageChange(currentPage - 1)}>Prev</Button>
        <Button onClick={() => handlePageChange(1)}>1</Button>
        <Button onClick={() => handlePageChange(2)}>2</Button>
        <Button onClick={() => handlePageChange(3)}>3</Button>
        <Text>...</Text>
        <Button
          disabled={isNextDisabled}
          onClick={() => !isNextDisabled && handlePageChange(currentPage + 1)}>Next</Button>
      </HStack>
    </Stack>
  );
}

export default App;
