import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  render() {
    const { onSubmit, buttonLabel, children } = this.props;

    return (
      <form className={css.contactFormTable} onSubmit={onSubmit}>
        {children}
        <button type="submit" className={css.contactFormButton}>
          {buttonLabel}
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
