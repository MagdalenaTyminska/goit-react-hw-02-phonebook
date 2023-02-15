import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
/* import css from './ContactForm.module.css'; */

export class InputField extends Component {
  // static defaultProps = {
  //   required: true,
  // };
  render() {
    const { label, type, name, pattern, title, onChange } = this.props;

    return (
      <>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          //   {...({ required } ? 'required' : null)}
          required
          onChange={onChange}
        />
      </>
    );
  }
}
