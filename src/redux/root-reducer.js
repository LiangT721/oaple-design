import { combineReducers } from "redux";

import headerReducer from "./header/header.reducer";

export default combineReducers({
    header: headerReducer,
})
