import React, { Component } from "react";
import {connect} from "react-redux";
import {formatQuestion} from "../utils/helpers";

class Player extends Component {
    render() {

        const { user } = this.props

        if( user === null) {
            return <p>This User doesnt exist.</p>
        }

        const {
             name, answers, avatarURL
        } = user

        return (
            <div>

                <p>{name}</p>
            </div>
        );
    }
}

function mapStateToProps ({authedUser, users}, {id}) {
    const user = users[id]

    return {
        authedUser,
        user: user,
        users: users
    }
}


export default connect(mapStateToProps)(Player)