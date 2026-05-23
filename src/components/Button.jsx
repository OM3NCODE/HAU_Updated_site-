import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', href, to, className = '', onClick, type = 'button' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-display font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none";
  
  const variants = {
    primary: "bg-brand-purple text-white shadow-md hover:shadow-brand-purple/50",
    secondary: "border-2 border-brand-purple text-brand-purple bg-transparent hover:bg-brand-purple hover:text-white",
    tertiary: "text-brand-purple hover:text-brand-light underline-offset-4 hover:underline px-0 py-0",
    accent: "bg-nft-orange text-white shadow-md hover:shadow-nft-orange/50",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
