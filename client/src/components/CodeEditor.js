import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

function CodeEditor({ initialCode, onCodeChange }) {
    const [code, setCode] = useState(initialCode);

    const handleCodeChange = (newCode) => {
        setCode(newCode);
        if (onCodeChange) {
            onCodeChange(newCode);
        }
    };

    return (
        <AceEditor
            mode="javascript"
            theme="github"
            value={code}
            onChange={handleCodeChange}
            name="codeEditor"
            editorProps={{ $blockScrolling: true }}
        />
    );
}

export default CodeEditor;
