import React, { Component } from "react";
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

    render() {

        const {authedUser, userData} = this.props;
        console.log(userData)

        return (
            <div className='navigation'>
                <div className='menu'>
                    <h1>Would You Rather?</h1>
                    <NavLink to='/' className='menu-link'>Home</NavLink>
                    <NavLink to='/new-question' className='menu-link'>New Question</NavLink>
                    <NavLink to='/leaderboard' className='menu-link'>Leaderboard</NavLink>
                </div>
                {
                    !userData
                        ?
                            null
                        :
                            <div className='player-logout'>
                                <p>Hello, {userData.name}</p>
                                <img className='nav-avatar' alt="User's avatar" src={userData.avatarURL} />
                                <NavLink to='/login' className='menu-link'>Logout</NavLink>
                            </div>
                }
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    const userData = users[authedUser];
    return {
        authedUser,
        userData
    };
}

export default connect(mapStateToProps)(Navigation);