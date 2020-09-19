import React from "react";
import { ITodoListProps } from "../interfaces/ITodoList";

const TodoList: React.FC<ITodoListProps> = (props: ITodoListProps) => {
  return (
    <div>
      <ul>
        {props.items.map((user) => (
          <li key={user.id}>
            <span>{user.text}</span>
            <button onClick={() => props.onDeleteTodo(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
