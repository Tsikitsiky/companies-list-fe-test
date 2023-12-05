import { SET_CURRENT_PAGE } from "../reducers/constants";

const setCurrentPage = (payload: number) => {
  return { type: SET_CURRENT_PAGE, payload }
}

export default setCurrentPage