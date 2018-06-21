import _ from 'lodash';
import {
  FETCH_TASKS,
  FETCH_TASK,
  DELETE_TASK,
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  CREATE_USER,
  FETCH_USERS,
  LOGIN_USER,
} from '../actions';

export default function(state = {}, action) {
  
  switch (action.type) {
    // case CREATE_USER:
    //   debugger
    //   return {
    //     ...state,
    //   };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.data,
      };
    case FETCH_TASKS:
      // debugger
      return {
        ...state,
        tasks: action.payload.data,
      };
    case DELETE_POST:
      return _.omit(state, action.payload);
    case DELETE_TASK:
      return {
        ...state,
        tasks: Object.keys(state.tasks).filter((item) => {
          return state[item]._id !== action.payload;
        })
      };
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
