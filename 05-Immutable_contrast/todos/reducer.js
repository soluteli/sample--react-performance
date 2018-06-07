const { fromJS } = require('immutable')
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}from './actionTypes.js';

export default (state = fromJS([]), action) => {
  switch(action.type) {
    case ADD_TODO: {
      return state.unshift(fromJS({
        id: action.id,
        text: action.text,
        completed: false
      }))
    }
    case TOGGLE_TODO: {
      return state.map(item => {
        return item.get('id') === action.id ? item.set('completed', !item.get('completed')) : item
      })
    }
    case REMOVE_TODO: {
      return state.filter((item) => {
        return item.id !== action.id;
      })
    }
    default: {
      return state;
    }
  }
}
