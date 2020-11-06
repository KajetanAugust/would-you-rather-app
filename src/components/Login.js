import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import authedUser from "../reducers/authedUser";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {

    state = {
        loginValue: this.props.authedUser,
        toHome: false,
        unlockButton: false
    }

    handleChange = (e) => {
        const newValue = e.target.value;
        this.setState({
                loginValue: newValue,
                unlockButton: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { loginValue } = this.state
        const { loginUser } = this.props
        loginUser(loginValue);

        this.setState(() => ({
            text: '',
            toHome: authedUser ? true : false,
        }))
    }

    render() {
        const { from } = this.props.location.state || '/'
        if(this.state.toHome === true) {
            return <Redirect to={ from } />
        }

        return (
            <div className='login-window-container'>
                <div className='login-window'>
                    <div className='app-logo'></div>
                    <h2>Choose a player</h2>
                    <form onSubmit={this.handleSubmit}>
                        <select
                            defaultValue='none'
                            onChange={(e) => this.handleChange(e)}
                        >
                            <option value='none' disabled>-- Select User --</option>
                            <option value='sarahedo'>Sarah Edo</option>
                            <option value='tylermcginnis'>Tyler McGinnis</option>
                            <option value='johndoe'>John Doe</option>
                        </select>
                        <button type='submit' disabled={!this.state.unlockButton}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (id) => {
            dispatch(setAuthedUser(id));
        },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));