import React, { Component } from "react";
import { connect } from 'react-redux';


class Login extends Component {
    render() {
        return (
            <div className='login-window-container'>
                <div className='login-window'>
                    <div className='app-logo'></div>
                    <h2>Choose a player</h2>
                    <form>
                        <select>
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