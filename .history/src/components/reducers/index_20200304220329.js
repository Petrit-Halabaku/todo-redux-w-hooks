import { combineReducers } from "redux";

import listItems from "./listData.reducer";

const rootReducer = combineReducers(listItems);

export default rootReducer;
