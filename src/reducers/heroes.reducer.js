const heroesReducer = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case 'FILTER':
            return [...state.filter(hero => hero.name.toLowerCase().includes(action.val.toLowerCase()))]
        default:
            return state
    }
}

export default heroesReducer