import { combineReducers } from "redux";
import postings from './postingReducers';
import common from './commonReducers';
import departments from './departmentReducers';

export default combineReducers({
    postings,
    common,
    departments
});
