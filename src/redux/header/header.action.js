import HeaderActionTypes from "./header.type";

export const toggleNavHidden = () => ({
    type: HeaderActionTypes.TOGGLE_NAV_HIDDEN
});

export const toggleLanguage = () => ({
    type: HeaderActionTypes.TOGGLE_LANGUAGE
})