import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

class PrivateRoute extends Component {
    render() {
        const { authedUser } = this.props
        return (
            <Route
                render={({ location }) =>
                    authedUser !== null ? (
                        this.props.children
                    ) : (
                        <Redirect
                            to= "/login"
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