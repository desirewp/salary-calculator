import { useState } from "react";

import "./ImportData.css";

const ImportData = () => {
  const [file, setFile] = useState();

  const handleUploadClick = () => {
    alert("Bew!");
  };

  return (
    <div className="container">
      <h1 className="content__heading">Import Data</h1>
      <div className="radioBtns">
        <div>
          <input type="radio" name="file-content" id="events" />
          <label htmlFor="events">Events</label>
        </div>
        <div>
          <input type="radio" name="file-content" id="participants" />
          <label htmlFor="participants">Participants</label>
        </div>
        </div>
      <br />

      <div className="upload-bar">
        <input type="file" name="" id="file-upload" />
        <button onClick={handleUploadClick}>Import</button>
      </div>
      <p className="invisble-text">------------OR---------------</p>
      <div className="upload-bar">
        <p>Import from Dans.se</p>
        <button onClick={handleUploadClick}>Import</button>
      </div>
    <hr/>

    <div className="status-msg-container"></div>
    <button>Save</button>
    <hr/>
    <button>Delete events</button>
    <button>Delete students</button>
    <br />
    <button>Delete all data</button>

    </div>
  );
};

export default ImportData;
