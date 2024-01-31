import React, { useRef, useState } from "react";
import "./AddTask.css";

export default function Addtask({ visible, setVisible, addNewtask }) {
  const modalRef = useRef(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

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
              onChange={(e) => setNewTitle(e.target.value)}
            ></input>
            <label className="descriptionLabel">Enter Description</label>
            <input
              type="text"
              onChange={(e) => setNewDescription(e.target.value)}
            ></input>
            <button
              className="addTaskButton"
              onClick={() => {
                setVisible(false);
                addNewtask({
                  title: newTitle,
                  description: newDescription,
                  completed: false 
                });
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
