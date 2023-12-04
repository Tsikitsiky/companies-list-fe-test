import { SET_COMPANIES } from "../reducers/constant";
import { CompanyType } from "../types";

const setCompanies = (companies: CompanyType[]) => {
return { type: SET_COMPANIES, payload: companies }
}

export default setCompanies