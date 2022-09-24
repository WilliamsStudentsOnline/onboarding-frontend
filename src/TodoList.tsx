

import React from "react";
import { Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>; // An array of Todos, an object containing a text field and a complete field.
  toggleComplete: ToggleComplete; // A function which toggles each item as complete.
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete
}) => {
  return (
    <ul>
      {/* PART 2: Fill in the below code to render TodoListItems into the TodoList */}
      {
      todos.map(todo => (
        <div>This is a placeholder for a TodoListItem.</div>
      ))}
    </ul>
  );
};
