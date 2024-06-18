# Online Code Compiler Project

This project is a code run and test platform similar to Leetcode. Currently only works for JavaScript. Only test example is for calculateFractional.
This code will be used for CodePulse, a project I am working on.

## Setup Instructions

**Prerequisites:**

*   Node.js and npm (or yarn) installed on your system
*   A modern web browser (Chrome, Firefox, Edge, etc.)
*   A code editor or IDE (optional, but recommended)

**Installation**

1. **Install dependencies:**
    ```bash 
    cd server
    npm install
    cd ..
    cd client
    npm install
    ```

## Running the Project

1.  **Start the Backend Server:**
    ```bash
    cd server 
    node index.js
    ```
    This typically runs the backend server on port 3001.
2.  **Start the Frontend Development Server:**
    ```bash
    cd client 
    npm start  
    ```
    This usually starts the frontend development server on port 3000.

3.  **Open in Browser:**  Open `http://localhost:3000` in your web browser.

## Project Structure

*   **server/**:  Contains the backend Node.js code responsible for executing code snippets and providing test case results.
*   **client/**:  Contains the React frontend code that includes the code editor, task instructions, input area, output area, and test results table.

## Functionality

1.  **Code Editor:** Users can write their JavaScript code, specifically implementations of the `calculateFactorial` function.
2.  **Task Instructions:** Provides clear instructions on the coding challenge.
3.  **Test Cases:** Automatically runs a set of predefined test cases against the user's code.
4.  **Test Results Table:** Displays the outcome of each test case (passed or failed).

## Contribution

Contributions to this project are welcome! Please feel free to open issues, submit pull requests, or suggest improvements.

## License

This project is licensed under the MIT License.  See the LICENSE file for details. 
