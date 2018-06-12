import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../actions';

class TasksIndex extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks() {
    return Object.keys(this.props.tasks).map((item, index)=> {
      return (
        <tr key={index}>
          {/*<Link to={`/posts/${post.id}`}>*/}
            {/*{ post.title }*/}
          {/*</Link>*/}
          <td className="taskTableIndex">{index + 1}</td>
          <td className="taskTableName">{this.props.tasks[item].task_name}</td>
          <td className="taskTableDesc">{this.props.tasks[item].task_desc}</td>
          <td className="taskTablePriority">{this.props.tasks[item].task_priority}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        {/*<div className="text-xs-right">*/}
          {/*<Link className="btn btn-primary" to="/posts/new">*/}
            {/*Add a Post*/}
          {/*</Link>*/}
        {/*</div>*/}
        <h3>Tasks</h3>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
          {this.renderTasks()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { fetchTasks })(TasksIndex);
