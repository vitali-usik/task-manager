import _ from 'lodash';
import { FETCH_TASKS, FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        ...action.payload.data,
      };
    case DELETE_POST:
      return _.omit(state, action.payload);
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
