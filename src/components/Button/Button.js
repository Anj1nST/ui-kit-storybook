import React from 'react';

import './Button.css';

export const Button = ({label = 'Text'}) => {
    return (
        <button className="Button">
            {label}
        </button>
    )
};
