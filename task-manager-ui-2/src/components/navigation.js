import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <div className="nav-item text-xs-left">
        <Link className="btn btn-primary" to={`/posts`}>
          Posts
        </Link>
      </div>
      <div className="nav-item text-xs-left">
        <Link className="btn btn-primary" to={`/tasks/new`}>
          Add new
        </Link>
      </div>
      <div className="nav-item text-xs-left">
        <Link className="btn btn-primary" to={`/posts/new`}>
          Add new 3
        </Link>
      </div>
    </nav>
  );
}
