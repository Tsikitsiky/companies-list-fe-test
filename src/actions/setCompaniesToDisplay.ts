import { SET_COMPANIES_TO_DISPLAY } from "../reducers/constant";
import { CompanyType } from "../types";

const setCompaniesToDisplay = (companies: CompanyType[]) => {
return { type: SET_COMPANIES_TO_DISPLAY, payload: companies }
}

export default setCompaniesToDisplay