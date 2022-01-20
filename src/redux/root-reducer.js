import { combineReducers } from "redux";

import headerReducer from "./header/header.reducer";
import projectReducer from "./project/project.reducer";

export default combineReducers({
    header: headerReducer,
    project: projectReducer,
})
