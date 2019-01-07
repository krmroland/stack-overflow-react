# Stack overflow lite web
[![Coverage Status](https://coveralls.io/repos/github/krmroland/stack-overflow-react/badge.svg?branch=develop)](https://coveralls.io/github/krmroland/stack-overflow-react?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/9991caf46abfd4e4fe87/maintainability)](https://codeclimate.com/github/krmroland/stack-overflow-react/maintainability)

This repository contains the `UI` for the [`Stack overflow lite API`](https://github.com/krmroland/stackoverflow-lite-ui) 

#### Demo
A working demo is hosted [here](https://andela-stackoverflow-ui.herokuapp.com/login)

![demo image](demo.gif "Demo")

#### Developer Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#### Requirements
Ensure that you have the following tools available locally on your machine

-   [Node js](https://nodejs.org/en/), a JavaScript runtime built on Chrome's V8 JavaScript engine.
-   [A package manager](https://en.wikipedia.org/wiki/Package_manager) ([npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/)) for installing  **webpack** and its dependencies
-   [Git](https://git-scm.com/) , a Version Control System

#### Setup
- Clone the repo locally to your machine by running `git clone https://github.com/krmroland/web-stack-overflow-lite.git`

#### Install Dependencies
While still in the terminal run `npm install` or  `yarn` depending on which package manager you have installed .

#### Building the UI templates
While in the terminal in the `UI` directory
 1. `npm run build` or `yarn run production ` to compile `.hbs` ,`css`,`js`, and images
 2. `npm run production` or `yarn run production` to compile `.hbs`  ,`css`,`js`,`images` and minify them
 3. `npm run watch` or `yarn run watch` to set up a local development server and watch all the files for changes and live reload


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
