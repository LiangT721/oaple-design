import HeaderActionTypes from "./header.type";

const INITIAL_STATE = {
  NavHidden: true,
  test: "aaaaa",
  eng: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_NAV_HIDDEN:
      return{
        ...state,
        NavHidden:!state.NavHidden,
      };
    case HeaderActionTypes.TOGGLE_LANGUAGE_CHI:
      return{
        ...state,
        eng:false
      }

    case HeaderActionTypes.TOGGLE_LANGUAGE_ENG:
      return{
        ...state,
        eng:true
      }
    default:
      return state;
  }
};

export default headerReducer;
