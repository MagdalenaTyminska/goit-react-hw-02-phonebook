import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';

export class ContactForm extends Component {
  render() {
    const { onSubmit, buttonLabel, children } = this.props;

    return (
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit">{buttonLabel}</button>
      </form>
    );
  }
}

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// };
