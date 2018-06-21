import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav>
      {props.user && (
        <div className="nav-item text-xs-left">
          <Link className="btn btn-primary" to={`/posts`}>
            Tasks
          </Link>
        </div>
      )}

      {props.user && (
        <div className="nav-item text-xs-left">
          <Link className="btn btn-primary" to={`/tasks/new`}>
            Add new
          </Link>
        </div>
      )}

      {!props.user && (
        <div className="nav-item text-xs-left">
          <Link className="btn btn-primary" to={`/register`}>
            Register
          </Link>
        </div>
      )}

      <div className="nav-item text-xs-left">
        <Link className="btn btn-primary" to={`/login`}>
          Login
        </Link>
      </div>

    </nav>
  );
}

function mapStateToProps(state) {
  return { user: state.tasks.currentUser };
}

export default connect(mapStateToProps)(Navigation);
