import filterHeroesReducer from '../filterHeroes.reducer';
import filterHeroes from '../../actions/index';

const reuslt = filterHeroes('Hero');
const state = 'Super';

it('should return val property of filterHeroes function', () => {
  expect(filterHeroesReducer(state, reuslt)).toBe('Hero');
});

it('should return state when the type property is not a FILTER', () => {
  reuslt.type = 'Another';
  expect(filterHeroesReducer(state, reuslt)).toBe('Super');
});
