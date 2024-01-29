import React, { useState } from "react";
import "./ToDoList.css";
import AddTask from "./AddTask/AddTask";

const ToDoList = (props) => {
  const [tasks, setTasks] = useState(props.sampleData);
  const [visible, setVisible] = useState(false);
  let count = 0;

  const addNewtask = (newTask) => {
    const newTasks = [...tasks, { title: newTask, completed: false }];
    setTasks(newTasks);
  };

  const markAsCompleteOrIncomplete = (index) => {
    let updatedTasks = [...tasks];
    if (updatedTasks[index].completed) {
      updatedTasks[index].completed = false;
    } else {
      updatedTasks[index].completed = true;
    }
    setTasks(updatedTasks);
  };

  const calculateCompletedTask = () =>  {
    count = 0;
    tasks.map((task) => {
        if(task.completed) {
            count++;
        }
        return null
    })
    return count;
  }

  return (
    <div>
      <div className="container">
        <div className="taskCount">
          <label>Total Task: {tasks.length}</label>&nbsp;
          <label>Completed Task: {calculateCompletedTask()}</label>&nbsp;
          <label>Pending Task: {tasks.length - calculateCompletedTask()}</label>
        </div>
        {tasks.map((task, i) => {
          return (
            <div className="card-container" key={i}>
              <div className="card">
                <p className="title">{task.title}</p>
                <p className="status">
                  {task.completed ? "- Completed" : "- Not completed"}
                </p>
              </div>
              {!task.completed && (
                <button
                  className="markCompleteButton"
                  onClick={() => markAsCompleteOrIncomplete(i)}
                >
                  Mark as Complete
                </button>
              )}
              {task.completed && (
                <button
                  className="markCompleteButton"
                  onClick={() => markAsCompleteOrIncomplete(i)}
                >
                  Mark as Incomplete
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button onClick={() => setVisible(true)}>Add Task</button>
      </div>
      <AddTask
        visible={visible}
        setVisible={setVisible}
        addNewtask={addNewtask}
      />
    </div>
  );
};

export default ToDoList;
