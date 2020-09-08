import heroesReducer from "../heroes.reducer";

it('should return state', () => {
    expect(heroesReducer('SuperHero')).toBe('SuperHero')
});
