import { SET_CURRENT_PAGE } from "../reducers/constant";

const setCurrentPage = (page: number) => {
return { type: SET_CURRENT_PAGE, payload: page }
}

export default setCurrentPage