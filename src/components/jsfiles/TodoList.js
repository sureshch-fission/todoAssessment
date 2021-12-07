import React from "react";
import TodoItem from "./TodoItem";
import "../cssfiles/TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="Todo-list">
      {props.ontodoAddList.map((task) => (
        <TodoItem key={task.id} id={task.id} removeTodo={props.removeTodo}>
          {task.text}
        </TodoItem>
      ))}
    </ul>
  );
};
export default TodoList;
