import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import Database from "../../utils/database";

function ListItem({ title, data, editMode, onChange }) {
  return (
    <div className="list-item">
      <span className="list-item-title">{title}: </span>
      {!editMode ? (
        <span className="list-item-value">{data}</span>
      ) : (
        <input
          value={data}
          type="text"
          className="edit-input"
          name={title.toLowerCase()}
          onChange={onChange}
        />
      )}
    </div>
  );
}
export default function TodoDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [task, setTask] = useState({});

  const [editMode, toggleEditMode] = useState(false);

  const onUpdateTask = () => {
    Database.updateTaskById(task);
  };
  const onBtnPress = () => {
    if (editMode) onUpdateTask();
    toggleEditMode(!editMode);
  };
  useEffect(() => {
    console.log("useEffect");
    setTask(Database.getTaskById(Number(id)));
  }, []);

  const handelChanges = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onDelete = () => {
    Database.removeById(task.id);
    history.goBack();
  };
  return (
    <div className="todo-details-container">
      <div className="btn-wrapper">
        <div onKeyPress={() => {}} onClick={onBtnPress} className="edit-btn">
          {editMode ? "SAVE" : "EDIT"}
        </div>
        <div className="delete-btn" onKeyPress={() => {}} onClick={onDelete}>
          Delete task
        </div>
      </div>

      <ListItem
        title="Title"
        data={task.title}
        editMode={editMode}
        onChange={handelChanges}
      />
      <ListItem
        title="Description"
        data={task.description}
        editMode={editMode}
        onChange={handelChanges}
      />
      <ListItem title="Date" data={task.date} />
    </div>
  );
}
