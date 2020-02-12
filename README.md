# Web Development Flickr Task

## Tech stack in this app

- typescript
- styled-components
- React
- yarn

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the CRA app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn server`

To enable the flickr request there is an expressjs app also which will host built site and perform request. The react app will request the server to get data from `https://api.flickr.com/services/feeds/photos_public.gne`.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn dev`

for development purposes, this will start both CRA development server and node expressjs server.

## Check list of solution requirements

[x] Create a flickr consumer.

[x] Consumer must be single page app.

[x] styled-components as well as CSS is used for styling.

[x] application built with React framework.

[x] Suspense used for images while they are loading.

[x] infinite scrolling enabled in the application.

[x] search textbox added in the app for additional searches on tags. This is defaulted to 'kittens' on the server and will default to this if nothing entered.
