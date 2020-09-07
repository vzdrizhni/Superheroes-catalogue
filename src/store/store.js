import { createStore } from 'redux';
// import heroesReducer from "../reducers/heroes.reducer";
import reducer from '../reducers/index';
import MarvelHeroes from '../services/marvel-api-client';

const heroes = new MarvelHeroes();

const initialState = {
  heroes: [],
  filter: '',
};

export const configureStoreAsync = async () => {
  const initState = await heroes.getAllCharacters()
    .then(body => {
      initialState.heroes = body;
      const store = createStore(reducer, initialState);
      console.log(store.getState());
      return store;
    });
  return initState;
};
