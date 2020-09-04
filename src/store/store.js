import createStore from "redux";
import MarvelHeroes from "../services/marvel-api-client";

const heroes = new MarvelHeroes();

const initialState = heroes.getAllCharacters().then(body => body);
console.log(initialState);