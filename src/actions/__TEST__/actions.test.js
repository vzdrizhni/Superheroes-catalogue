import filterHeroes from '../index';

const result = filterHeroes();

it('value of type property should be FILTER ', () => {
  expect(result.type).toBe('FILTER');
});

it('value of val property should be FILTER ', () => {
  expect(result.val).toBe(undefined);
});
