import React, { Component } from "react";
import {connect} from "react-redux";
import Player from "./Player";

class Leaderboard extends Component {
    render() {
        console.log(this.props.usersIds)
        return (
            <div>
                {
                    this.props.usersIds.map((id) => (
                        <Player
                            id={id}
                            key={id}
                        />
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps ({ users }) {
    return {
        usersIds: Object.keys(users)
            .sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length))
    }
}

export default connect(mapStateToProps)(Leaderboard)