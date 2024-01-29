import React, { useState } from "react";
import './ToDoList.css'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const ToDoList = (props) => {
  const [tasks, setTasks] = useState(props.sampleData);

  console.log("===> tasks", tasks);
  return tasks.map((task) => {
    return (
      <div className="card">
        <p className="title">{task.title}</p>
        <p className="status">{task.completed ? <CheckIcon/>: <ClearIcon />}</p>
      </div>
    );
  });
};

export default ToDoList;
