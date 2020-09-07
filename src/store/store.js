import { createStore } from 'redux';
// import heroesReducer from "../reducers/heroes.reducer";
import reducer from '../reducers/index';
import MarvelHeroes from '../services/marvel-api-client';

const heroes = new MarvelHeroes();

const initialState = {
  heroes: [],
  filter: '',
};

export const configureStoreAsync = async () => { // eslint-disable-line import/prefer-default-export
  const initState = await heroes.getAllCharacters()
    .then(body => {
      initialState.heroes = body;
      const store = createStore(reducer, initialState);
      return store;
    });
  return initState;
};
