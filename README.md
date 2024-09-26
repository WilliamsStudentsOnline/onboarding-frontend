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
- Copy the code on the [Brew Homepage](https://brew.sh/) to a terminal
- Now you have brew installed and can get packages by typing `brew install [package name]`

If you don't have Git installed:
- If you have brew installed type `brew install git` in a terminal
- If you don't follow the download instructions [here](https://git-scm.com/downloads) based on your OS

If you don't have Node installed:
- If you have brew installed type `brew install node` in a terminal
- If you don't follow the download instructions [here](https://nodejs.org/en/) based on your OS

If you don't have Yarn installed
- Type `npm install --global yarn`  in a terminal

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

Let's enhance our todo list with a progress tracker! We'll add a counter that shows how many tasks are completed out of the total number of tasks.
Your challenge:

- Use React hooks to create this counter in `App.tsx`.
- The counter should display as "[completed tasks] / [total tasks]".
- Ensure the counter updates correctly when tasks are added or completed.
- Make sure it works accurately regardless of the initial tasks.

Hint: You'll need to use the useState hook and possibly useEffect. Think about when you need to recalculate the counts!

## Part 4
Now that you've got the hang of React components and hooks, why not add your own feature to the todo list?
Some ideas to get you started:

- Add a due date to tasks
- Implement task categories or priority levels
- Create a "Clear Completed Tasks" button

Remember:
Use the existing components and code as reference
Don't hesitate to look up React documentation or tutorials
Feel free to ask us questions - we're here to help!

## Part 5
Now that you've got a grasp of React basics, it's time to put your knowledge into practice! Head over to our [training repo](https://github.com/WilliamsStudentsOnline/wso-frontend-training.git) and try your hand at one of the projects.\
\
Click here for a react project that demonstrates some of this stuff:
https://github.com/mlaws21/SoundQuest/blob/main/.backend/src/components/Main.jsx\
\
Remember, learning to code is like learning a new language - practice makes perfect. Don't hesitate to use online resources when you're stuck. Googling is an essential skill in a developer's toolkit. However, we encourage you to attempt solutions on your own first. This approach helps reinforce your learning and improves problem-solving skills.\
\
Happy coding, and don't forget - every expert was once a beginner. Embrace the challenge and enjoy the learning process!
