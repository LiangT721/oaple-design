import ProjectActionTypes from "./project.type";

const INITIAL_STATE = {
  projectCategory: true,
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

    default:
      return state;
  }
};

export default projectReducer;
