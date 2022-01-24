import LanguageActionTypes from "./language.type";

const INITIAL_STATE = {
  eng: true,
};

const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LanguageActionTypes.TOGGLE_LANGUAGE_CHI:
      return{
        ...state,
        eng:false
      }
    case LanguageActionTypes.TOGGLE_LANGUAGE_ENG:
      return{
        ...state,
        eng:true
      }
    default:
      return state;
  }
};

export default languageReducer;
