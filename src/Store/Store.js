import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import primariaSi from './Sagas/Sagas';
import CONSTANTS from './Actions/Constants/Constants';

const sagaMidleware = createSagaMiddleware();


const setLoading = (state = { loading: false }, action) => {
  switch (action.type) {
    case CONSTANTS.SHOW_LOADING:
      return { loading: true };
    case CONSTANTS.HIDE_LOADING:
      return { loading: false };
    default:
      return state;
  }
};

const setInnerLoading = (state = { loadingInner: false }, action) => {
  switch (action.type) {
    case CONSTANTS.SHOW_INNER_LOADING:
      return { loadingInner: true };
    case CONSTANTS.HIDE_INNER_LOADING:
      return { loadingInner: false };
    default:
      return state;
  }
};

const listaPokemones = (state = { resultPokemon: [] }, action) => {

    switch (action.type) {
      case CONSTANTS.SAVE_POKEMON:
        return { resultPokemon: [action.data.data] };
      default:
        return state;
    }
  };

const reducers = combineReducers({
  setLoading,
  setInnerLoading,
  listaPokemones,
});
const Store = createStore(reducers, applyMiddleware(sagaMidleware));
sagaMidleware.run(primariaSi);

export default Store;