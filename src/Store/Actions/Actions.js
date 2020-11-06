import CONSTANTS from './Constants/Constants';

export const actionBuscar = (data) => ({ type: CONSTANTS.BUSCAR_POKEMON, data });

export const savePokemon = (data) => ({ type: CONSTANTS.SAVE_POKEMON, data });

export const actionShowLoading = () => ({ type: CONSTANTS.SHOW_LOADING });

export const actionHideLoading = () => ({ type: CONSTANTS.HIDE_LOADING });

export const actionShowInnerLoading = () => ({ type: CONSTANTS.SHOW_INNER_LOADING });

export const actionHideInnerLoading = () => ({ type: CONSTANTS.HIDE_INNER_LOADING });

export const actionDataFormRegister = (formRegister) => ({ type: CONSTANTS.DATA_FORM_REGISTER, formRegister });
