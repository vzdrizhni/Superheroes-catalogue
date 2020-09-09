const heroesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILL':
      return action.act;
    default:
      return state;
  }
};

export default heroesReducer;
