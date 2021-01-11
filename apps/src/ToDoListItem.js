import React from 'react';
import './ToDoListItem.css';


function ToDoListItem (props) {
  return (
    <div className="ToDoListItem" {...props}>
      <div className="ToDoListItem-title">{props.title}</div>
      <div className="ToDoListItem-description">{props.description}</div>
    </div>
  );
}

export default ToDoListItem;