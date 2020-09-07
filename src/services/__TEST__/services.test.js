import MarvelHeroes from '../marvel-api-client'
import { array } from 'prop-types';
import "regenerator-runtime";
import 'babel-polyfill';

const heroes = new MarvelHeroes();

it('should return array of objects', () => {
    heroes.getAllCharacters()
    .then(resp =>
        expect(resp).toBe(array))
});
