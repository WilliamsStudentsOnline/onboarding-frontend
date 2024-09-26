

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
      {/* Hint: Use the JavaScript map function on the todos array. What components should we be returning? 
          There is an example of map being used in App */ }
    </ul>
  );
};
