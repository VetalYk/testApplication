import React, { useEffect, useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import TableHeader from "../../components/TableHeader/TableHeader";
import "./style.css";
import Database from "../../utils/database";
import TableRow from "../../components/TableRow/TableRow";
import { getTodoCells } from "../../utils/common";

const Statuses = {
  Active: "active",
  Deleted: "deleted",
  Completed: "completed",
};
export default function TodoContainer() {
  const headerCells = ["Title", "Time of creating"];
  const format = "DD.MM.YYYY hh:mm";
  const history = useHistory();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const data = Database.getAllTasks();
    if (data) setTasks(data);
    console.log("data =>", data);
    console.log("tasks =>", tasks);
  }, []);

  const clearInputs = () => {
    setTitle("");
    setDescription("");
  };
  const onAddTask = () => {
    if (!title && !description) return;
    const task = {
      id: new Date().getTime(),
      title,
      description,
      date: moment(new Date()).format(format),
      status: Statuses.Active,
    };
    Database.setNewTask(task);
    const data = Database.getAllTasks();
    setTasks(data);
    clearInputs();
    // console.log(moment(new Date()).format(format));
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") onAddTask();
  };

  const onCellClick = (id) => {
    history.push(`todo/${id}`);
  };
  return (
    <div className="todo-container">
      <div className="add-task-container">
        <input
          value={title}
          placeholder="Task title"
          onChange={(event) => setTitle(event.target.value)}
          className="add-task-title"
        />
        <input
          value={description}
          placeholder="Task description"
          onChange={(event) => setDescription(event.target.value)}
          className="add-task-description"
        />
        <div
          className="add-task-btn"
          onClick={onAddTask}
          onKeyPress={onKeyPress}
        >
          Add Task
        </div>
      </div>
      <table className="todo-table">
        <TableHeader items={headerCells} />
        <tbody>
          {tasks.map((item) => (
            <TableRow
              key={item.id}
              rowItems={Object.values(getTodoCells(item))}
              onCellClick={() => onCellClick(item.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
