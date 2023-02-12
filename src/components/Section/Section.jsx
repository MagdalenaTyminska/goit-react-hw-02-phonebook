import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section>
        <h2 className={css.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
