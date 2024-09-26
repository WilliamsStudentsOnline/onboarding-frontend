# React Basics for Todo List Project

This guide covers the fundamental React concepts you'll need to understand and complete the todo list project.

## 1. What is React?

React is a JavaScript library for building user interfaces. It allows you to create reusable UI components that can efficiently update and render when your data changes.

## 2. Components

Components are the building blocks of React applications. They are JavaScript functions or classes that return React elements describing what should appear on the screen.

### Functional Components

For this project, we'll be using functional components. Here's a basic example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## 3. JSX

JSX is a syntax extension for JavaScript that looks similar to HTML. It's used with React to describe what the UI should look like.

```jsx
const element = <h1>Hello, world!</h1>;
```

## 4. Props

Props (short for properties) are how you pass data from a parent component to a child component.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Sara" />
```

## 5. State and Hooks

State is data in your application that can change over time. In functional components, we use the useState hook to manage state.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## 6. Event Handling

React uses camelCase for event names and passes a function as the event handler.

```jsx
function Button() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

## 7. Rendering Lists

In React, you can use the JavaScript map() function to render lists of elements.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

## 8. Conditional Rendering

You can use JavaScript operators like if or the conditional operator to create elements representing the current state.

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

## 9. Forms

In React, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.

```jsx
function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + name);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

These concepts will help you understand and work with the todo list project. As you progress through the tasks, refer back to this guide for explanations of the React features you're using.
