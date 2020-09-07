import { combineReducers } from 'redux';
import filterHeroesReducer from './filterHeroes.reducer';
import heroesReducer from './heroes.reducer';

const reducer = combineReducers({ heroes: heroesReducer, filter: filterHeroesReducer });

export default reducer;
