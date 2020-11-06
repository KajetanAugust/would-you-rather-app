## Would You rather...?

Would you rather is the app **React** and **Redux** app that lets users play "Would You Rather?" game

"The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules."

App created using [React](https://reactjs.org), [React router](https://reactrouter.com), [redux](https://redux.js.org), [react-redux](https://react-redux.js.org) [Create React App](https://create-react-app.dev).
#### Login

App uses private routes. When user visits the app, react router redirects user to the '/login' route. When user logs in router redirects to the URL typed in before login or to the home page.

#### List of Questions

Home page contains two lists of questions. User can switch between this two lists using buttons.

* Answering Questions

    When user selects unanswered question app redirects to the quesiton page, where user can answer the question. After answering, the "Result" page is displayed.

* Viewing Question Results

    User can select answered question to see results of the poll.

#### Question Results

Question Results page displays the question with users answer colored green, and additional informations about other users votes.


#### Create new Question

User can create new questions by typing option one and option two in the form. Upon submiting the form, question is saved.

#### Leaderboards 

Leaderboard displays points for creating and answering questions for every user.

<hr>
<hr>

I have used Mentor Help on Udacity provided in this threads: 
* https://knowledge.udacity.com/questions/370596
* https://knowledge.udacity.com/questions/371937

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
