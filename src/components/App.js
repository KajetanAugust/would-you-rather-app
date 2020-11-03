import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'

import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Navigation from "./Navigation";
import NewQuestion from "./NewQuestion";
import QuestionList from "./QuestionList";
import Leaderboard from "./Leaderboard";
import PollDetails from "./PollDetails";

import { handleInitialData } from "../actions/shared";

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
                                <PrivateRoute path='/add'>
                                    <Navigation id={authedUser} />
                                    <NewQuestion />
                                </PrivateRoute>
                                <PrivateRoute path='/question/:question_id' >
                                    <Navigation id={authedUser} />
                                    <PollDetails />
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
