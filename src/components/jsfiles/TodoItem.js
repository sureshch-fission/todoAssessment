import React from "react";
import { useState } from "react/cjs/react.development";
import "../cssfiles/TodoItem.css";

const TodoItem = (props) => {
  const [edit, setedit] = useState(true);
  const [Icon, setIcon] = useState(true);
  const todoreadmark = (e) => {
    e.preventDefault();
    setedit(false);

    setIcon(false);

    if (!Icon) {
      setIcon(true);
      setedit(true);
    }
  };

  //remove todo function
  const removeTodoItem = () => {
    props.removeTodo(props.id);
  };

  return (
    <div className="Card">
      <div className="Todo-Items-description">
        {<h6 className={!edit ? "complete" : ""}>{props.children} </h6>}
        <div className="Todo-icons">
          <i
            className={!Icon ? "far fa-times-circle" : "fas fa-check-circle"}
            onClick={todoreadmark}
          ></i>{" "}
          <i className="fas fa-trash" onClick={removeTodoItem}></i>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
