import { SET_COMPANIES_TO_DISPLAY } from "../reducers/constants";
import { CompanyType } from "../types";

const setCompaniesToDisplay = (payload: CompanyType[]) => {
  return { type: SET_COMPANIES_TO_DISPLAY, payload }
}

export default setCompaniesToDisplay