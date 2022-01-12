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
    case HeaderActionTypes.TOGGLE_LANGUAGE:
      return{
        ...state,
        eng:!state.eng
      }
    default:
      return state;
  }
};

export default headerReducer;
