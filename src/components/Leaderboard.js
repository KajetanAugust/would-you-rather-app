import React, { Component } from "react";
import {connect} from "react-redux";
import Player from "./Player";
import Question from "./Question";

class Leaderboard extends Component {
    render() {
        return (
            <div>
                Leaderboards
                {
                    this.props.usersIds.map((id) => (
                        <Player id={id}/>
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps ({ users }) {
    return {
        usersIds: Object.keys(users)
            .sort((a,b) => users[b].id - users[a].id)
    }
}

export default connect(mapStateToProps)(Leaderboard)