import _ from 'lodash';
import { FETCH_TASKS, FETCH_TASK, DELETE_TASK, FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        ...action.payload.data,
      };
    case DELETE_POST:
      return _.omit(state, action.payload);
    case DELETE_TASK:
      return Object.keys(state).filter((item) => {
        return state[item]._id !== action.payload;
      });
    case FETCH_TASK:
      return { ...state, [action.payload.data._id]: action.payload.data };
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
    // debugger
      return {
        ...state,
        ...action.payload.data,
      };
    default:
      return state;
  }
}
