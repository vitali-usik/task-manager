import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask } from '../actions';

class TasksIndex extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/login');
    }
    this.props.fetchTasks();
  }

  onDeleteClick = (id) => {
    this.props.deleteTask(id, () => {
      this.props.fetchTasks();
      this.props.history.push('/');
    });
  };

  getTasks() {
    let tasks = {};
    Object.keys(this.props.tasks).forEach((item) => {
      if (!item) { return; }

      if (this.props.tasks[item].task_user_id === this.props.user._id) {
        tasks[item] = this.props.tasks[item];
      }
    });

    return tasks;
  }

  renderTasks() {
    if (!this.props.tasks) { return; }

    let tasks = this.getTasks();

    return Object.keys(tasks).map((item, index)=> {
      return (
        <tr key={index}>
          <td className="taskTableIndex">{index + 1}</td>
          <td className="taskTableName">{this.props.tasks[item].task_name}</td>
          <td className="taskTableDesc">{this.props.tasks[item].task_desc}</td>
          <td className="taskTablePriority">{this.props.tasks[item].task_priority}</td>
          <td className="taskTableCtrl">
            <Link className="btn btn-info" to={`/tasks/${this.props.tasks[item]._id}`}>
              Show
            </Link>
          </td>
          <td className="taskTableCtrl">
            <button
              className="btn btn-danger"
              onClick={() => this.onDeleteClick.bind(this)(this.props.tasks[item]._id) } >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    // debugger
    return (
      <div>
        <h3>Tasks</h3>
        {this.props.user && (
          <h1>Hello {this.props.user.user_name}</h1>
        )}
        {this.props.tasks && Object.keys(this.getTasks()).length !== 0 ? (
          <table className="table">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Priority</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {this.renderTasks()}
            </tbody>
          </table>
        ) : (
          <div>There are no tasks</div>
        )}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks.tasks, user: state.tasks.currentUser };
}

export default connect(mapStateToProps, { fetchTasks, deleteTask })(TasksIndex);
