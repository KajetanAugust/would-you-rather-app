import React, { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Would You Rather?</h1>
                    <p>Home</p>
                    <p>New Question</p>
                    <p>Leaderboard</p>
                </div>
                <div>
                    <p>Hello, $PLAYER_NAME</p>
                    {/*<img alt="User's avatar">Avatar goes here</img>*/}
                    <p>Logout</p>
                </div>
            </div>
        );
    }
}

export default Navigation;