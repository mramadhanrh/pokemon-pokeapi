import React from 'react';
import PropTypes from 'prop-types';

const HomeTemplate = ({ header, children }) => {
  return (
    <div id="main-template">
      <header id="header">{header}</header>
      <main>{children}</main>
    </div>
  );
};

HomeTemplate.propTypes = {
  header: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

HomeTemplate.defaultProps = {
  header: null,
  children: null
};

export default HomeTemplate;
