import React from 'react'

const Button = ({ text, className = "", ...props }) => {
  return (
    <button type={type} className={`btn btn-primary ${className}`} aria-label={text} {...props}>
      {text || "Click Here"}
    </button>
  );
};

export default Button