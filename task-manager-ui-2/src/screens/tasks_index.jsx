import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask } from '../actions';

class TasksIndex extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  onDeleteClick = (id) => {
    this.props.deleteTask(id, () => {
      this.props.fetchTasks();
      this.props.history.push('/');
    });
  };

  renderTasks() {
    return Object.keys(this.props.tasks).map((item, index)=> {
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
    return (
      <div>
        <h3>Tasks</h3>

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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { fetchTasks, deleteTask })(TasksIndex);
