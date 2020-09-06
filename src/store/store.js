import {createStore} from "redux";
import heroesReducer from "../reducers/heroes.reducer";
import MarvelHeroes from '../services/marvel-api-client'
const heroes = new MarvelHeroes();

const initialState = {
    heroes: [],
}

export const configureStoreAsync = async () => {
    const initState = await heroes.getAllCharacters()
    .then(body => {
        const store = createStore(heroesReducer, body);
        return store
    });
    return initState;
}
