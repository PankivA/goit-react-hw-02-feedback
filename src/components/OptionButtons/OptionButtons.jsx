import React from 'react';
import css from './OptionButtons.module.css';

function OptionButtons ({ options, feedbackButton }) {
    return (
        <div>
            {options.map(option => (
                <button
                    className={css.button}
                    key={option}
                    onClick={() => feedbackButton(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default OptionButtons;