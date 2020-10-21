import React, { Component } from "react";
import { connect } from 'react-redux';
import {setAuthedUser} from "../actions/authedUser";


class Login extends Component {

    handleChange = (e) => {
        const newValue = e.target.value;
        this.setState(() => ({
            loginValue: newValue
        }))
    }
    //TODO: add button functionality for submitting login user

    handleSubmit = (e) => {
        e.preventDefault()
        const { loginValue } = this.state
        const { dispatch } = this.props
        dispatch(setAuthedUser(loginValue))
    }

    render() {
        this.state = {
            loginValue: ''
        }

        return (
            <div className='login-window-container'>
                <div className='login-window'>
                    <div className='app-logo'></div>
                    <h2>Choose a player</h2>
                    <form onSubmit={this.handleSubmit}>
                        <select
                            onChange={(e) => this.handleChange(e)}
                            // value={this.state.loginValue}
                        >
                            <option value='sarahedo'>Sarah Edo</option>
                            <option value='tylermcginnis'>Tyler McGinnis</option>
                            <option value='johndoe'>John Doe</option>
                        </select>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default connect()(Login);