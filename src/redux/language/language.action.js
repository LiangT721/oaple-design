import LanguageActionTypes from "./language.type";


export const toggleLanguageChi = () => ({
    type: LanguageActionTypes.TOGGLE_LANGUAGE_CHI,
    payload:false
})

export const toggleLanguageEng = () => ({
    type:LanguageActionTypes.TOGGLE_LANGUAGE_ENG,
    payload:true
})