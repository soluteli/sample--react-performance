import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

import Perf from 'react-addons-perf'
const win = window;
win.Perf = Perf


const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

let todoList = [
  {
    id: 1,
    text: 'todo 01',
    completed: false
  },
  {
    id: 2,
    text: 'todo 02',
    completed: false
  },
  {
    id: 3,
    text: 'todo 03',
    completed: false
  }
]

const initialState = {
  todos: todoList
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, initialState, storeEnhancers);
