import React, { Component, Fragment } from 'react';
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'
// import Navigation from "./Navigation";
import Login from "./Login";
// import NewQuestion from "./NewQuestion";
// import Question from "./Question";
// import Result from "./Result";

import QuestionList from "./QuestionList";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Fragment>
                <LoadingBar />
                <div className="App">

                    <Login />
                </div>
            </Fragment>
        );
    }
}

export default connect()(App)
