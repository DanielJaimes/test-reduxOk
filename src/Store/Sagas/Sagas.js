import {
    takeEvery, call, put, 
  } from 'redux-saga/effects';
  import {
    actionShowLoading, actionHideLoading, savePokemon
  } from '../Actions/Actions';
import CONSTANTS from '../Actions/Constants/Constants';
  
  // eslint-disable-next-line no-undef
  const axios = require('axios');

  const buscarPokemonOnServer = (values) => axios.get('https://pokeapi.co/api/v2/pokemon/'+values)
  


  function* buscarPokemon(values) {
    yield put(actionShowLoading());
    try {
      const busqueda = yield call(buscarPokemonOnServer, values.data);
      yield put(savePokemon(busqueda));
      yield put(actionHideLoading());
    } catch (error) {
      console.log('Error en busqueda', error);
      yield put(actionHideLoading());



    }
  }
  

  
  export default function* primariaSi() {
    yield takeEvery(CONSTANTS.BUSCAR_POKEMON, buscarPokemon);
  }