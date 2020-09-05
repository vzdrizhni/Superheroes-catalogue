import {createStore} from "redux";
import heroesReducer from "../reducers/heroes.reducer";

// const heroes = new MarvelHeroes();

// var result = 0;

// heroes.getAllCharacters().then(body => result = body).then(() => console.log(result))
// async function initialState() {
//     return await heroes.getAllCharacters().then(body => body);
// };

const initialState = {
    heroes: []
}
const store = createStore(heroesReducer, initialState.heroes);

console.log(store.getState());

export default store;
