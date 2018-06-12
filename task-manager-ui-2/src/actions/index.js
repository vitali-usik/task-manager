import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=borodatos';

export function fetchTasks() {
  const request = axios.get(
    `http://localhost:3003/tasks`,
    {
      proxy: {
        host: '127.0.0.1',
        port: 3003,
      },
    });

  return {
    type: FETCH_TASKS,
    payload: request
  };
}

// export function fetchPosts() {
//   const request = axios.get(
//     `http://localhost:3003/tasks`,
//     {
//       proxy: {
//         host: '127.0.0.1',
//         port: 3003,
//       },
//     }
//   );
//
//   return {
//     type: FETCH_POSTS,
//     payload: request
//   };
// }

export function createTask(values, callback) {
  const request = axios.post(`http://localhost:3003/tasks`, values)
    .then(() => callback() );

  return {
    type: CREATE_TASK,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
   .then(() => callback() );

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback() );

  return {
    type: DELETE_POST,
    payload: id
  };
}
