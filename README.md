# WSO Frontend Onboarding: React and Typescript

## About this Repository

A Williams student was planning on adding a todo list feature to WSO, but they never got around to finishing it. Your role is to fill in the missing code to finish the todo list. Follow the instructions below to learn how to complete the project.

## Setting Up Your Dev Environment
What you need:
- A code editor
- Git
- Node
- Yarn

You can download VSCode [here](https://code.visualstudio.com/)

If you are on Mac I would highly recommend installing Homebrew (a package manager)
- Copy the code on the [Brew Homepage](https://brew.sh/) to a terminal window
- Now you have brew installed and can get packages by typing `brew [package name]`

If you don't have Git installed:
- If you have brew installed type `brew install git` in a terminal
- If you don't follow the download instructions [here](https://git-scm.com/downloads) based on your OS

If you don't have Node installed:
- If you have brew installed type `brew install node` in a terminal
- If you don't follow the download instructions [here](https://nodejs.org/en/) based on your OS

If you don't have Yarn installed
- If you have brew installed type `npm install --global yarn`  in a terminal

Now you are ready for onboarding!


## Clone and Run the App

Clone the app:

```bash
git clone https://github.com/WilliamsStudentsOnline/onboarding-frontend.git
cd onboarding-frontend
```

Install dependencies:

```bash
yarn
```

Run the app:

```
yarn start
```

## Notes

This app is written in TypeScript, which is basically a different version of JavaScript. The app also uses React, a JavaScript framework which allows for easy development of an efficient frontend. Both of these technologies are the core technologies behind building the WSO website.

The building blocks of React apps are *components*, which refer to distinct units comprising the frontend. For example, `TodoListItem.tsx` is a functional component which takes in *props* (arguments) and outputs an HTML object which renders as a checkbox. The todo list is comprised of many `TodoListItems.` We can render these components in our React code to make them appear on our page.

The following exercises will familiarize you with some basic principles of components in React.

## Part 1

Our React app is made of 4 components: an `App`, a `TodoList`, a `TodoListItem`, and an `AddTodoForm`.

Navigate to the `src` folder. These components are visible in the folder follows by a `.tsx` (TypeScript) extension.

The previous owner of the project wants the `App` component to display a `TodoList`, followed by an `AddTodoForm`. Add code to the `App.tsx` file to render these components.

## Part 2

After successfully adding the `TodoList` and `AddTodoForm`, we notice that the `TodoListItems` are not properly rendering. Add code to the `TodoList.tsx` file to fix the TodoList and properly render the `TodoListItems`.

## Part 3
*Optional Challenge Extension*: We want to display the total number of completed items on the todo list out of the total number of items. Using [React hooks](https://reactjs.org/docs/hooks-overview.html), create a counter showing [total number of completed tasks] / [total number of tasks]. You will be able to complete this task by adding code only to `App.tsx`. 



