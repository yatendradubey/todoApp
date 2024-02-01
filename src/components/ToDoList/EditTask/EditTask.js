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
  const [priority, setPriority] = React.useState();
  const taskDataList = taskData.taskList.taskList;
  const priorityMapping = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  useEffect(() => {
    setTitle(taskDataList[id].title);
    setDescription(taskDataList[id].description);
    setPriority(priorityMapping[taskDataList[id].priority]);
  }, [taskDataList, id]);

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] == value);
  }

  const handleSave = () => {
    taskDataList[id] = {
      title: title,
      description: description,
      completed: taskDataList[id].completed ? true : false,
      priority: getKeyByValue(priorityMapping, priority),
    };
    setTasks(taskDataList);
    console.log(taskData, tasks);
    navigate(-1);
  };

  const handleChange = (event) => {
    setPriority(event.target.value);
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
        <div className="textFieldStyle">
          <label>Priority</label>&nbsp;&nbsp;
          <select value={priority} onChange={handleChange}>
            <option value={3}>High</option>
            <option value={2}>Medium</option>
            <option value={1}>Low</option>
          </select>
        </div>
      </div>
      <div className="saveButton">
        <button onClick={() => handleSave()}>Save</button>
      </div>
    </div>
  );
};

export default EditTask;
