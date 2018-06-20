import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

import TasksIndex from './screens/tasks_index';

import Navigation from './components/navigation';
import TasksNew from './screens/tasks_new';
import TaskShow from './screens/task_show';
import PostsNew from './components/posts_new';
import PostsShow from './components/post_show';
import Register from './screens/register';
import Login from './screens/Login';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <header/>
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/posts/new" component={ PostsNew } />
            <Route path="/posts/:id" component={ PostsShow } />
            <Route path="/tasks/new" component={ TasksNew } />
            <Route path="/tasks/:id" component={ TaskShow } />
            <Route path="/register" component={ Register } />
            <Route path="/login" component={ Login } />
            <Route path="/" component={ TasksIndex } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
