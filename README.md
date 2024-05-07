# WeekDay Code Assignment

## Introduction

Welcome!

This is the code assignment for WeekDay. Here, you'll find the necessary steps to set up your development environment, install dependencies, and run the application in both development and production modes.

The deployed version of the application is available at: https://piku-weekday.netlify.app

## Setup

1. Make sure you have cloned this repository locally on your machine.

2. Using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) is recommended for this project.
   It helps us all use the same version of Node.js, which can prevent bugs.

```bash
nvm use
```

3. Run the following command in your terminal to install the project's dependencies:

```bash
npm ci
```

This command ensures a clean installation by removing the `node_modules` folder (if it exists) and installing dependencies based on the `package-lock.json` file.

### Running the App

- **Production Preview:** To start the application in production mode (for a preview similar to a deployed version), use this command:

```bash
npm run prod
```

- **Development Mode:** To run the application in development mode, use this command:

```bash
npm run dev
```

## About the Project

While the core functionality is complete, the UI is still under development. My focus was on ensuring the app functions as intended.

- **Functionality:** The app displays a list of jobs displayed in cards, allow filtering them using the provided options, and implements infinite scrolling.

- **Code Quality:** The code is well-formatted, linted, and includes comments for improved readability. It also utilizes separate components for each section, improving maintainability and future updates.

- **User Interface & Responsiveness:** The app currently uses basic styling from the MUI library, providing a presentable UI. Importantly, the app is fully responsive and adapts to various screen sizes (phones, tablets, desktops) without layout issues.

- **Performance:** The app is structured for potential lazy loading, which can be beneficial in larger projects to improve initial page load speed. While not implemented here (since unnecessary in a single-page app), performance remains strong. The app consistently scores above 95 in Lighthouse audits.
