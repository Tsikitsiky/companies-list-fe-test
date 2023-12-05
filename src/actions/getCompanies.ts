import { SET_COMPANIES } from "../reducers/constants";
import { CompanyType } from "../types";

const setCompanies = (payload: CompanyType[]) => {
  return { type: SET_COMPANIES, payload }
}

export default setCompanies