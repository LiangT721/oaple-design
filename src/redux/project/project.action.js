import ProjectActionTypes from "./project.type";

export const toggleProjectCategory1 = () =>({
    type:ProjectActionTypes.TOGGLE_PROJECT_CATEGORY_1
})
export const toggleProjectCategory2 = () =>({
    type:ProjectActionTypes.TOGGLE_PROJECT_CATEGORY_2
})

export const setSliderIndex = (index) =>({
    type:ProjectActionTypes.SET_SLIDER_INDEX,
    payload:index
})

export const appearSlider = () =>({
    type:ProjectActionTypes.APPEAR_SLIDER,
})
export const hideSlider = () =>({
    type:ProjectActionTypes.HIDDEN_SLIDER,
})