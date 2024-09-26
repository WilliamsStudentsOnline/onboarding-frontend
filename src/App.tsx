import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { ToggleComplete, Todo, AddTodo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <h1>React Todo List</h1>
      {/* PART 1: Add a TodoList and an AddTodoForm to the app. */}
      {/* Ex: to add a component called TodoTest that has a prop test
        Assume test is some const declared before
        <TodoTest test={test} />
      */}
    </React.Fragment>
  );
};

export default App;
