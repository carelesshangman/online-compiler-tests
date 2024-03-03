import React, { useState } from 'react';
import axios from 'axios';

function RunButton({ code, input, updateResults  }) {
    const [isLoading, setIsLoading] = useState(false);

    const executeCode = async () => {
        setIsLoading(true);
        try {
            //console.log(code, input);
            const result = await axios.post('http://localhost:3001/runCode', { code, input });
            const extractedResults = result.data.results.map(result => (result.passed ? 'passed' : 'failed'));
            updateResults(extractedResults);
            //console.log(result.data);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button onClick={executeCode} disabled={isLoading}>
            {isLoading ? 'Running...' : 'Run Code'}
        </button>
    );
}

export default RunButton;
