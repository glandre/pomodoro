# Pomodoro

The goal of this project is to write a function in JavaScript to solve the problem described bellow:

## Problem



## Solution Approach



### Complexity



## Instructions to Install

Run the command:
```
npm install
```

## Instructions to Run

Run the command:
```
npm start
```

## Instructions to Test

Run the tests with the command:
```npm test```

You can add custom tests inside `/test` folder and re run it.

## Technical Description

This project uses Mocha for automated tests, and, it uses Babel to transpile Javascript from ES6 to ES5.

## Project Creation Steps

Here is the step-by-step I followed in order to create this repository.

### Requirements

- NPM and Node must be installed in your computer and available in the command line.
  - https://www.npmjs.com/
  - https://nodejs.org/en/

- Babel: npm install --save-dev babel-cli
  - Setup: http://babeljs.io/docs/setup/#installation

### Steps

```
  git init
  npm init
  npm install --save-dev mocha
  mkdir src
  nano src/index.js
  mkdir test
  nano test/index.js
  nano test/test.js
  nano .gitignore
  npm test
  npm install babel-core --save-dev
  npm install babel-preset-es2015 --save-dev
  npm install --save-dev babel-plugin-transform-flow-strip-types
  npm test
  git add .gitignore
  git add package.json
  git add src/
  git add test/
  nano README.md
  git commit -as
```

## REFERENCES

- Mocha JS
  - Getting started: https://mochajs.org/
- Babel
  - Setup: http://babeljs.io/docs/setup/#installation
  - Testing in ES6 (ES2015) with Mocha and Babel: http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
