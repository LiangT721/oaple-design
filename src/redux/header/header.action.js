import HeaderActionTypes from "./header.type";

export const toggleNavHidden = () => ({
    type: HeaderActionTypes.TOGGLE_NAV_HIDDEN
});

export const toggleLanguageChi = () => ({
    type: HeaderActionTypes.TOGGLE_LANGUAGE_CHI,
    payload:false
})

export const toggleLanguageEng = () => ({
    type:HeaderActionTypes.TOGGLE_LANGUAGE_ENG,
    payload:true
})