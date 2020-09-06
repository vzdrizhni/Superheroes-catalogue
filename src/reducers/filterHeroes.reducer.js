const filterHeroesReducer = (state='', action) => {
    switch (action.type) {
        case 'FILTER':
            return action.val
        default:
            return state
    }
}

export default filterHeroesReducer;