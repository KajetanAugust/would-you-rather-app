import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'

import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Navigation from "./Navigation";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Result from "./Result";
import QuestionList from "./QuestionList";
import Leaderboard from "./Leaderboard";

import { handleInitialData } from "../actions/shared";
// import authedUser from "../reducers/authedUser";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {

        const { loading, authedUser } = this.props
        console.log(loading)
        console.log(authedUser)
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                        <div className='container'>
                            <Switch>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <PrivateRoute exact path='/'>
                                    <Navigation id={authedUser} />
                                    <QuestionList />
                                </PrivateRoute>
                                <PrivateRoute path="/leaderboard">
                                    <Navigation id={authedUser} />
                                    <Leaderboard />
                                </PrivateRoute>
                                <PrivateRoute path='/new-question'>
                                    <Navigation id={authedUser} />
                                    <NewQuestion />
                                </PrivateRoute>
                            </Switch>
                        </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        loading: authedUser === null,
        authedUser
    }
}

export default connect()(App)
