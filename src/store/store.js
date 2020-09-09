import { createStore } from 'redux';
import reducer from '../reducers/index';

const initialState = {
  heroes: [],
  filter: '',
};

const store = createStore(reducer, initialState);

export default store;
