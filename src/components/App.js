import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import Login from "./Login";
import Navigation from "./Navigation";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Result from "./Result";
import QuestionList from "./QuestionList";
import Leaderboard from "./Leaderboard";

class App extends Component {


    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {authUser} = this.props

        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                        <div className='container'>
                            {
                                this.props.loading === true
                                    ?
                                    null
                                    :
                                    <div>
                                        <Navigation />
                                        <Route exact path='/' component={QuestionList}/>
                                        <Route path='/login' component={Login} />
                                        <Route path='/new-question' component={NewQuestion} />
                                        <Route path='/leaderboard' component={Leaderboard} />
                                    </div>
                            }
                        </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps ({ authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect()(App)
