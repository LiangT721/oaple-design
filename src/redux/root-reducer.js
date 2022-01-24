import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import headerReducer from "./header/header.reducer";
import projectReducer from "./project/project.reducer";
import languageReducer from "./language/language.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['language']
}

const rootReducer = combineReducers({
    header: headerReducer,
    project: projectReducer,
    language: languageReducer,
})

export default persistReducer(persistConfig, rootReducer);
