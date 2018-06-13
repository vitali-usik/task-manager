import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTask, deleteTask } from '../actions';

class TaskShow extends Component {
  componentDidMount() {
    if (!this.props.task) {
      const { id } = this.props.match.params;
      this.props.fetchTask(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteTask(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { task } = this.props;

    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>Task name: { task.task_name }</h3>
        <h6>Description: { task.task_desc }</h6>
        <p>Priority: { task.task_priority }</p>
      </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) {
  return { task: tasks[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchTask, deleteTask })(TaskShow);
