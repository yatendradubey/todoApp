import React, { useContext, useEffect, useState } from "react";
import "./EditTask.css";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../../../TaskContext";

const EditTask = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskData = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState();
  const taskDataList = taskData.taskList.taskList;

  useEffect(() => {
    setTitle(taskDataList[id].title);
    setDescription(taskDataList[id].description);
  }, [taskDataList[id]]);

  const handleSave = () => {
    console.log("===> save", title, description);
    taskDataList[id] = {
      title: title,
      description: description,
      completed: taskDataList[id].completed ? true : false,
    };
    setTasks(taskDataList);
    console.log(taskData, tasks);
    navigate(-1);
  };

  return (
    <div className="editTaskContainer">
      <h2>Edit Task</h2>
      <div className="formContainer">
        <div className="textFieldStyle">
          <label>Title</label>&nbsp;&nbsp;
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="textFieldStyle">
          <label>Description</label>&nbsp;&nbsp;
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="saveButton">
        <button onClick={() => handleSave()}>Save</button>
      </div>
    </div>
  );
};

export default EditTask;
