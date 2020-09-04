import createStore from "redux";
import MarvelHeroes from "../services/marvel-api-client";
import heroesReducer from "../store/store";

const heroes = new MarvelHeroes();

const initialState = async () => await heroes.getAllCharacters().then(body => body);
console.log(initialState);

const store = createStore(heroesReducer, initialState);
