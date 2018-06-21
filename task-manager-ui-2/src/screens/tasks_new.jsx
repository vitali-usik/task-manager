import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../actions';

class TasksNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type={field.type === 'number' ? 'number' : 'text'}
          { ...field.input }
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    if (!values.task_user_id) {
      values.task_user_id = this.props.user._id;
    }

    this.props.createTask(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="Name"
          name="task_name"
          component={ this.renderField }
        />
        <Field
          label="Description"
          name="task_desc"
          component={ this.renderField }
        />
        <Field
          label="Priority"
          name="task_priority"
          type="number"
          component={ this.renderField }
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.task_name || values.task_name.length < 3) {
    errors.task_name = "Enter a name that is at least 3 characters!";
  }

  if (!values.task_desc) {
    errors.task_desc = "Enter some description";
  }

  if (!values.task_priority) {
    errors.content = "Enter priority please";
  }
  return errors;
}

function mapStateToProps(state) {
  return { user: state.tasks.currentUser };
}

export default reduxForm({
  validate,
  form: 'TasksNewForm'
})(
  connect(mapStateToProps, { createTask })(TasksNew)
);
