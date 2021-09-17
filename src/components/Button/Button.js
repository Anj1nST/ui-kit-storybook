import React from 'react';

import './Button.css';

export const Button = ({label = 'Text', handleClick}) => {
    return (
        <button className="Button" onClick={handleClick}>
            {label}
        </button>
    )
};
