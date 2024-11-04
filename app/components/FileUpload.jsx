"use client";
import React, { useState } from "react";

const FileUpload = () => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Clear previous message
    setMessage("");
    setIsSuccess(null);

    // Check if a file is selected
    if (!file) {
      setMessage("No file selected. Please choose a file to upload.");
      setIsSuccess(false);
      return;
    }

    // Validate file extension
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (fileExtension === "mp3" || fileExtension === "wav") {
      setMessage("File uploaded successfully!");
      setIsSuccess(true);
    } else {
      setMessage("Unsupported file format. Please upload an MP3 or WAV file.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-300 rounded-lg shadow-md w-80 mx-auto">
      <h2 className="text-lg font-semibold mb-4">Upload an Audio File</h2>

      <input
        type="file"
        onChange={handleFileUpload}
        className="mb-4 cursor-pointer text-gray-700"
        accept=".mp3, .wav"
      />

      {message && (
        <p
          className={`mt-4 text-sm ${
            isSuccess ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
