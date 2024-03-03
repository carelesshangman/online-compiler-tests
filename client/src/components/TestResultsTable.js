import React from 'react';

const TestResultsTable = ({ testResults }) => {
    return (
        <div className="test-results">
            <table>
                <thead>
                <tr>
                    <th>Test 1</th>
                    <th>Test 2</th>
                    <th>Test 3</th>
                    <th>Test 4</th>
                    <th>Test 5</th>
                    <th>Test 6</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {/* Update these cells based on test results */}
                    {testResults.map((result, index) => (
                        <td key={index}>
                            {result === 'passed' ? (
                                <span className="passed">Passed</span>
                            ) : result === 'failed' ? (
                                <span className="failed">Failed</span>
                            ) : (
                                result
                            )}
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TestResultsTable;
