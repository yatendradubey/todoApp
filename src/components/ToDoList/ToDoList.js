import React, {useContext, useState } from "react";
import "./ToDoList.css";
import AddTask from "./AddTask/AddTask";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../TaskContext";

const ToDoList = (props) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(props.sampleData);
  const [visible, setVisible] = useState(false);
  const taskData = useContext(TaskContext)

  let count = 0;

  const addNewtask = (newTask) => {
    const newTasks = [
      ...tasks,
      {
        title: newTask.title,
        description: newTask.description,
        completed: newTask.completed,
      },
    ];
    setTasks(newTasks);
    taskData.setTaskList([...newTasks]);
  };


  function handleClick(i) {
    navigate(`/editTask/${i}`);
  }

  const markAsCompleteOrIncomplete = (index) => {
    let updatedTasks = [...tasks];
    if (updatedTasks[index].completed) {
      updatedTasks[index].completed = false;
    } else {
      updatedTasks[index].completed = true;
    }
    setTasks(updatedTasks);
  };

  const calculateCompletedTask = () => {
    count = 0;
    tasks.map((task) => {
      if (task.completed) {
        count++;
      }
      return null;
    });
    return count;
  };

  return (
    <div>
      <div className="container">
        <div className="taskCount">
          <label>Total Task: {tasks.length}</label>&nbsp;
          <label>Completed Task: {calculateCompletedTask()}</label>&nbsp;
          <label>Pending Task: {tasks.length - calculateCompletedTask()}</label>
        </div>
        <div className="fuzzySearchContainer">
          <label>Fuzzy Search</label>&nbsp;
          <input
            type="text"
            // onChange={(e) => setNewTask(e.target.value)}
          ></input>
        </div>
        {tasks.map((task, i) => {
          return (
            <div className="card-container" key={i}>
              <div className="card">
                <p className="title">Title: {task.title}</p>
                <p className="title">Description: {task.description}</p>
                <p className="status">
                  Status: {task.completed ? "Completed" : "Not completed"}
                </p>
              </div>
              <button
                className="markCompleteButton"
                onClick={() => handleClick(i)}
              >
                Edit Task
              </button>
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
              <h5 className="priorityLabel">Priority:</h5>&nbsp;
              <p>{task.priority}</p>
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
