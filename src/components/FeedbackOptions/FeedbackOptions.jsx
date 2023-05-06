import React from 'react';
import css from './FeedbackOptions.module.css';

function FeedbackOptions ({ options, onLeaveFeedback }) {
    return (
        <div>
            {options.map(option => (
                <button
                    className={css.button}
                    key={option}
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default FeedbackOptions;