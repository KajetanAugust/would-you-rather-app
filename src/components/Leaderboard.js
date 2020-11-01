import React, { Component } from "react";
import {connect} from "react-redux";
import Player from "./Player";

class Leaderboard extends Component {
    render() {
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
            .sort((a,b) => users[b].id - users[a].id)
    }
}

export default connect(mapStateToProps)(Leaderboard)