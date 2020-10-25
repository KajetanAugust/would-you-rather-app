import React, { Component } from "react";
import { connect } from 'react-redux';
import {setAuthedUser} from "../actions/authedUser";


class Login extends Component {

    state = {
        loginValue: this.props.authedUser,
    }

    handleChange = (e) => {
        const newValue = e.target.value;
        console.log(newValue)
        this.setState({
            loginValue: newValue
        })
        console.log(this.state.loginValue)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { loginValue } = this.state
        const { loginUser } = this.props
        loginUser(loginValue)
    }

    render() {
        return (
            <div className='login-window-container'>
                <div className='login-window'>
                    <div className='app-logo'></div>
                    <h2>Choose a player</h2>
                    <form onSubmit={this.handleSubmit}>
                        <select
                            onClick={(e) => this.handleChange(e)}
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

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (id) => {
            dispatch(setAuthedUser(id));
        },
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);