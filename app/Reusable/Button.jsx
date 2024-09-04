"use client";

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-12 py-2 rounded-md text-sm sm:text-base font-semibold border border-primary  bg- text-primary hover:bg-teal-700 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
