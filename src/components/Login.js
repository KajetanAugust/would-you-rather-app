import React, { Component } from "react";
import { connect } from 'react-redux';
import {setAuthedUser} from "../actions/authedUser";


class Login extends Component {

    setLoginValue = (e) => {
        const newValue = e.target.value;
        console.log(newValue)
        this.props.dispatch(setAuthedUser(newValue))
    }
    //TODO: add button functionality for submitting login user



    render() {
        this.state = {
            loginValue: ''
        }

        return (
            <div className='login-window-container'>
                <div className='login-window'>
                    <div className='app-logo'></div>
                    <h2>Choose a player</h2>
                    <form>
                        <select onChange={(e) => this.setLoginValue(e)}>
                            <option value='sarahedo'>Sarah Edo</option>
                            <option value='tylermcginnis'>Tyler McGinnis</option>
                            <option value='johndoe'>John Doe</option>
                        </select>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default connect()(Login);