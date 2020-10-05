import React, { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <div className='navigation'>
                <div className='menu'>
                    <h1>Would You Rather?</h1>
                    <p>Home</p>
                    <p>New Question</p>
                    <p>Leaderboard</p>
                </div>
                <div className='player-logout'>
                    <p>Hello, $PLAYER_NAME</p>
                    <img className='nav-avatar' alt="User's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange' />
                    <p>Logout</p>
                </div>
            </div>
        );
    }
}

export default Navigation;