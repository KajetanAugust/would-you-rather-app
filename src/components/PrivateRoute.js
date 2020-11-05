import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

class PrivateRoute extends Component {

    render() {

        const { authedUser } = this.props
        const saveLocation = window.location.href;
        console.log(saveLocation)

        return (
            <Route
                render={({ location }) =>
                    authedUser !== null ? (
                        this.props.children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: window.location.href }
                            }}
                        />
                    )
                }
            />
            )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps)(PrivateRoute)