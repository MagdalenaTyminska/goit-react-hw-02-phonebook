import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter, handleSearch } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={handleSearch} />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleSearch: PropTypes.func,
};
