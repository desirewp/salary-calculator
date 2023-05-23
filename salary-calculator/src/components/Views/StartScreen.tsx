import React from "react";

const StartScreen = () => {
  //__________EVENTS HANDLERS________________
  const handleClickOnProject = () => {
    return alert("Tja!");
  };

  const handleClickNewProject = () => {
    return alert("Tjaaaaaa!");
  };

  return (
    <div>
      <h1>PayDay Calculator</h1>
      <hr />
      <div>
        <button onClick={handleClickNewProject}>New PayDay-Project</button>
      </div>
      <div onClick={handleClickOnProject}>
        <p>VT22</p>
      </div>
      <div onClick={handleClickOnProject}>
        <p>HT22</p>
      </div>
      <div onClick={handleClickOnProject}>
        <p>VT21</p>
      </div>
      <hr />
    </div>
  );
};

export default StartScreen;
