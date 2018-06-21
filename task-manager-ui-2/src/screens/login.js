import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, fetchUsers } from '../actions';

class Login extends Component {
  isValidUser = true;

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type={field.type || 'text'}
          { ...field.input }
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.isValidUser = true;

    const user = this.props.users.find((item) => {
      return item.user_name === values.user_name && item.user_pass === values.user_pass;
    });

    if (user) {
      this.isValidUser = true;
      this.props.loginUser(user);
      this.props.history.push('/');
    } else {
      this.isValidUser = false;
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        {!this.isValidUser && (
          <div className="alert alert-warning">Name and/or password are incorrect</div>
        )}
        <Field
          label="Name"
          name="user_name"
          component={ this.renderField }
        />
        <Field
          label="Password"
          name="user_pass"
          type="password"
          component={ this.renderField }
        />
        <button type="submit" className="btn btn-primary">
          Login
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

  // if (!values.user_name || values.user_name.length < 3) {
  //   errors.user_name = "Enter a name that is at least 3 characters!";
  // }
  //
  // if (!values.user_pass || values.user_pass.length < 4) {
  //   errors.user_pass = "Enter a pass that is at least 4 characters!";
  // }

  return errors;
}

function mapStateToProps(state) {
  return { users: state.tasks.users };
}

export default reduxForm({
  validate,
  form: 'RegisterForm'
})(
  connect(mapStateToProps, { loginUser, fetchUsers })(Login)
);
