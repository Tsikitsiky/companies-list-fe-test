import { ActionType, StateType } from "../types";
import { SET_COMPANIES, SET_COMPANIES_TO_DISPLAY, SET_CURRENT_PAGE } from "./constants";

const initialState: StateType = {
    companies: [],
    companiesToDisplay: [],
    currentPage: 1
}

function companiesReducer(state=initialState, action: ActionType) {
    switch (action.type) {
        case SET_COMPANIES:
            return {...state, companies: action.payload}
        case SET_COMPANIES_TO_DISPLAY:
            return {...state, companiesToDisplay: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state;
    }
}

export default companiesReducer