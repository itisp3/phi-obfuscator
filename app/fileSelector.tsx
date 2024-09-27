"use client";

import React, { useState } from 'react';
import axios from 'axios';

const FileSelector = () => {
    const [selectedFiles, setSelectedFileS] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFileS(event.target.files);
    };

    const handleSubmit = async () => {
        if (!selectedFiles) {
            alert("Please select a file first.");
            return;
        }

        //loop through all files selected
        for (let i = 0; i < selectedFiles.length; i++) {

            const formData = new FormData();
            formData.append('file', selectedFiles[i]);

            try {
                //hardcoded connection to locally running API.  Can be added to a config file for easy updates based on env
                const response = await axios.post('https://localhost:7176/PhiObfuscator', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert(response.data);
            } catch (error) {
                alert("File upload failed." + error);
            }
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleSubmit}>Upload File</button>
        </div>
    );
};

export default FileSelector;
