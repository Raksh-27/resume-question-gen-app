import React, { useState } from 'react'; // Import the CSS file
import "./applic.css"
const Application = () => {
  const [companyName, setCompanyName] = useState('');
  const [file, setFile] = useState(null);

  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (companyName && file) {
      alert(`Applying to ${companyName}. File uploaded: ${file.name}`);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="application-container">
      <h1>Enter Details</h1>
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={handleCompanyChange}
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fileUpload">Upload Resume (PDF):</label>
          <input
            type="file"
            id="fileUpload"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Application;
