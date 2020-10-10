import React, { Component } from "react";
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {

        const {authUser, users} = this.props
        // const user = users.includes(authUser) && users.filter(user => authUser.id === user.id)
        console.log(users)

        return (
            <div className='navigation'>
                <div className='menu'>
                    <h1>Would You Rather?</h1>
                    <NavLink to='/' className='menu-link'>Home</NavLink>
                    <NavLink to='/new-question' className='menu-link'>New Question</NavLink>
                    <NavLink to='/leaderboard' className='menu-link'>Leaderboard</NavLink>
                </div>
                <div className='player-logout'>
                    <p>Hello, {authUser} </p>
                    <img className='nav-avatar' alt="User's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange' />
                    <NavLink to='/login' className='menu-link'>Logout</NavLink>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ authUser, users }) {

    return {
        authUser: authUser,
        users: users
    }
}

export default connect(mapStateToProps)(Navigation);