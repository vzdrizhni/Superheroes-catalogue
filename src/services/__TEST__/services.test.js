import MarvelHeroes from '../marvel-api-client'
import { array } from 'prop-types';
import 'babel-polyfill';

const heroes = new MarvelHeroes();

it('should be instance of MarvelHeroes class', () => {
    expect(heroes).toBeInstanceOf(MarvelHeroes)
});


it('should return array of objects', () => {
    heroes.getAllCharacters()
    .then(resp =>
        expect(resp).toBe(array))
});

it('should return first arrays element name ', () => {
    heroes.getAllCharacters()
    .then(resp =>
        expect(resp[0].name).toBe('3-D Man'))
});
