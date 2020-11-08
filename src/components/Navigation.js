import React, { Component } from "react";
import {connect} from "react-redux";
import { NavLink, Redirect, withRouter } from 'react-router-dom'
import { deleteAuthedUser } from "../actions/authedUser";

class Navigation extends Component {

    state = {
        toLogin: false,

    }

    handleLogout = () => {
        const { logoutUser } = this.props
        logoutUser();
        this.setState({
            toLogin: true
        })
    }

    componentWillUnmount() {
        window.history.pushState(null, null, '/')
        this.handleLogout()
    }

    render() {

        const { userData } = this.props;
        const { toLogin } = this.state;

        if(toLogin === true) {
            return(
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: '/' },
                    }}
                />
                )
        }

        return (
            <div className='navigation'>
                <div className='menu'>
                    <h1>Would You Rather?</h1>
                    <NavLink to='/' className='menu-link'>Home</NavLink>
                    <NavLink to='/add' className='menu-link'>New Question</NavLink>
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
        userData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logoutUser: () => {
            dispatch(deleteAuthedUser());
        },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));