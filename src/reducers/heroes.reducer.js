const heroesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FILL':
            return [...state, ...action.act]
        default:
            return state
    }
    return state;
}

export default heroesReducer