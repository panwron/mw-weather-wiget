###MW weather widget coding Challenge

[DEMO] https://mw-weather-wiget.mwlab1.now.sh/

---

Challenge seemed easy at first glance but as quickly turned out, quite tricky. Still enjoyable. It took me 6 hours not counting brakes and last 3 in a bit rush. After 4 hours I didn't have anything worth sending. Even though challenge outline was mostly clear I found some points a bit confusing. I've sent email with questions, but it looks like it gets lost in the battle, or maybe it was part of the challenge.

---

##### Project

My plan for the weather widget was to build self-contained react library to be share via npm. Started with create-react-app to quickly scaffold app, and… ended app with it.

---

##### Final app

Final app is self-contained react component that adapts to every container. It’s responsive relative to container size not window size and works even on smallest screens [smallest screens](https://mlabpics.s3.eu-central-1.amazonaws.com/20190909_223025.jpg).
Thinking about building library I wanted to limit dependencies and decided to use styled-components to avoid style conflicts with parent app and dealing with bundling css files.
I think using styled components was a good choice, it would be really hard to achieve container-based responsiveness with regular css or css modules. One of sc drawback is it’s really easy to bloat components structure due it’s composition. Some time and planning is needed to keep it clean. For state management I used react context API.

---

#### Dependencies

- Styled components
- PropTypes react Typechecking
- date-fns – modular date utility
- react as peer dependency

---

#### Features

- Full responsiveness based on parent container
- It scrolls to current hour on init
- Clicking on certain hour display its weather details on the top

---

#### Tricky parts

- Responsiveness
- Hiding slider scrollbar for every size
- Handling window resize and adjusting elements accordingly with react refs

---

##### Bugs

- really strange one. Some components throw "Date is not a constructor" when calling new Date(). Didn’t have time to debug and just moved declarations to other components
- openweathermap same origin policy forces using proxy. Again, because of lack of time I’ve used cors-anywhere but time to time requests get blocked.

---

To run locally clone and follow:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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
