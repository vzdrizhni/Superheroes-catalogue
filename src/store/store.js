import {createStore} from "redux";
import heroesReducer from "../reducers/heroes.reducer";

const initialState = {
    heroes: [],
}

const store = createStore(heroesReducer, initialState.heroes);

console.log(store.getState());

export default store;
