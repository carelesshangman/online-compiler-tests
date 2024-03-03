import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import RunButton from './components/RunButton';
import TaskInstructions from './components/TaskInstructions';
import TestResultsTable from './components/TestResultsTable';
import './styles.css';
import axios from "axios";

function App() {
    const [code, setCode] = useState('function calculateFactorial(num) { \n//Your code goes here\n\n\n} ');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [testResults, setTestResults] = useState(
        new Array(6).fill('null') // Initialize 6 null results
    );
    const updateTestResults = (newResults) => {
        setTestResults(newResults);
    }

    const handleExecute = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/runCode', { code, input });
            console.log(response.data.results); // Log the backend response

            const extractedResults = response.data.results.map(result => (result.passed ? 'passed' : 'failed'));
            setTestResults(extractedResults);

        } catch(error) {
            setOutput("An error occurred."); // Handle errors appropriately
        } finally {
            setIsLoading(false);
        }
    }

    return (//<InputBox onInputChange={setInput} />
        <div className="container">
            <div className="column"> {/* Column for editor & instructions */}
                <CodeEditor initialCode={code} onCodeChange={setCode} />
                <TaskInstructions />
            </div>
            <div className="column"> {/* Column for results, input, and button */}
                <RunButton code={code} input={input} onClick={handleExecute} isLoading={isLoading} updateResults={updateTestResults} />
                <OutputBox output={output} />
                <TestResultsTable testResults={testResults} />
            </div>
        </div>
    );
}

export default App;
