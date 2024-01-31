import React from "react";
import "./EditTask.css";

const EditTask = (props) => {
  return (
    <div className="editTaskContainer">
      <h2>Edit Task</h2>
      <div className="formContainer">
        <div className="textFieldStyle">
          <label>Title</label>&nbsp;&nbsp;
          <input type="text"></input>
        </div>
        <div className="textFieldStyle">
          <label>Description</label>&nbsp;&nbsp;
          <input type="text"></input>
        </div>
      </div>
      <div className="saveButton">
        <button>Save</button>
      </div>
    </div>
  );
};

export default EditTask;
