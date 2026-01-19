import React from 'react';

const Button = ({ children, className = "", ...props }) => (
    <button
        className={`bg-scoot-yellow text-white font-mono font-bold py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-8 border-2 border-transparent hover:bg-white hover:text-scoot-yellow hover:border-scoot-yellow transition-all duration-300 text-sm md:text-base ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;
