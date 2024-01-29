import React, { useRef, useState } from "react";
import "./AddTask.css";

export default function Addtask({ visible, setVisible, addNewtask }) {
  const modalRef = useRef(null);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      {visible ? (
        <div
          style={{
            position: "absolute",
            display: "flex",
            direction: "row",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: "100",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          onClick={(e) => {
            if (modalRef.current.contains(e.target)) {
              return;
            }
            setVisible(false);
          }}
        >
          <div className="modal" ref={modalRef}>
            <span>
              <b>Add Task</b>
            </span>
            <label className="titleLabel">Enter Task</label>
              <input
                type="text"
                onChange={(e) => setNewTask(e.target.value)}
              ></input>
              <button
                className="addTaskButton"
                onClick={() => {
                  setVisible(false);
                  addNewtask(newTask);
                }}
              >
                Add
              </button>
            <button onClick={() => setVisible(false)}>close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
