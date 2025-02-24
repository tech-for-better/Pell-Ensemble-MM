# Pell Ensemble

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Team
FAC 21 Graduates/Tech for Better:
- Michael Devlin
- Maryam Ghorbani

## Browser Compatibility

Whilst the app does work across all browsers, there does appear to be some latency issues in some browsers, such as Chrome and Brave. We've found that by far the best browser to use the app in is Firefox. We therefore strongly suggest users access the app via Firefox.

### Performance

The PoseNet 'pose matching' algorithm generally works better when the user is standing rather than sat down. We recommend that, where possible, users who are able to stand should do so for the best results. 

## Features
What can you do?
- Activate webcam
- Interact with webcam images
- "Complete" sections/levels and unlock answers
- Navigate through the web portal
- Use responsive navbar for smaller screens

## Tech Stack
- React
- Styled Components
- PoseNet
- TensorFlow
- Netlify

### Dependencies

- react
- react-confetti
- react-router-dom
- react-dom
- react-icons/md
- react-router-dom
- react-webcam
- @tensorflow/tfjs"
- @tensorflow-models/posenet
- use-window-size-hook

## Installation

To run:
- clone this repo on your device using the command git clone
- ```cd``` into the ```pell-ensemble``` folder
- Run ```npm install``` to install dependencies
- Run ```npm start``` to run the app

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
