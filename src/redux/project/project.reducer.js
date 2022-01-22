import ProjectActionTypes from "./project.type";

const INITIAL_STATE = {
  projectCategory: true,
  sliderHidden: true,
  sliderIndex:0,
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.TOGGLE_PROJECT_CATEGORY_1:
      return {
        ...state,
        projectCategory: true,
      };
    case ProjectActionTypes.TOGGLE_PROJECT_CATEGORY_2:
      return {
        ...state,
        projectCategory: false,
      };
    case ProjectActionTypes.SET_SLIDER_INDEX:
      return{
        ...state,
        sliderIndex:action.payload
      }
    case ProjectActionTypes.APPEAR_SLIDER:
      return{
        ...state,
        sliderHidden: false,
      }
    case ProjectActionTypes.HIDDEN_SLIDER:
      return{
        ...state,
        sliderHidden:true,
      }
    default:
      return state;
  }
};

export default projectReducer;
