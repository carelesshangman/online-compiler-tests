const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { VM } = require('vm2');
const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

const testCases = [
    { input: 1, expectedOutput: 1 },
    { input: 2, expectedOutput: 2 },
    { input: 3, expectedOutput: 6 },
    { input: 4, expectedOutput: 24 },
    { input: 5, expectedOutput: 120 },
    { input: 8, expectedOutput: 40320 },
];

app.post('/runCode', (req, res) => {
    const { code, input } = req.body;

    const results = [];

    try {
        const vm = new VM({ timeout: 1000, sandbox:{resultArray: results}});
        let cc = 1;

        for (const testCase of testCases) {
            if (!code.startsWith('function calculateFactorial(num) {')) {
                continue;
            }

            const trimmedCode = code.slice(code.indexOf('{') + 1, code.lastIndexOf('}'));

            const codeToRun = `
                function calculateFactorial(num) { 
                    ${trimmedCode} 
                } 
                resultArray.push({ input: ${testCase.input}, passed: (calculateFactorial(${testCase.input}) === ${testCase.expectedOutput}) });
            `;
            vm.run(codeToRun);
            cc++;
        }
        console.log(results);
        res.json({ results });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});