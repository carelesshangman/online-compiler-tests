import React, { useState } from 'react';

function InputBox({ onInputChange }) {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
        if (onInputChange) {
            onInputChange(event.target.value);
        }
    };

    return (
        <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Enter input for your code here"
        />
    );
}

export default InputBox;
