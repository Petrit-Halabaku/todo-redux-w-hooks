import { combineReducer } from "react-redux";

import listItems from "./listData.reducer";

const rootReducer = combineReducer(listItems);

export default rootReducer;
