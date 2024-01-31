import React, { useContext } from "react";
import "./EditTask.css";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../../TaskContext";

const EditTask = (props) => {
  const { id } = useParams();
  const taskData = useContext(TaskContext);
  console.log("===> id", id);
  console.log("===> taskDataEdit", taskData);
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
