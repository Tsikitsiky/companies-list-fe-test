import {combineReducers} from "redux";
import companiesReducer from './reducers'

const rootReducer = combineReducers({task: companiesReducer});

export default rootReducer