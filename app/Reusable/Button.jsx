"use client";

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 rounded-md text-sm sm:text-base font-medium text-slate-800 hover:bg-cyan-950 hover:text-cyan-50 transition ease-in-out duration-300 ${className}`}
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
