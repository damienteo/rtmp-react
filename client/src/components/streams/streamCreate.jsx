import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log("meta", meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  // onSubmit(event) {
  //   event.preventDefault();
  // }

  onSubmit(formValues) {
    return formValues;
  }

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="Title" component={this.renderInput} label="Enter Title" />
        <Field
          name="Description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  console.log("errors", errors);
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
