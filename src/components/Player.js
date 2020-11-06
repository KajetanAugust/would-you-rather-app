import React, { Component } from "react";
import {connect} from "react-redux";

class Player extends Component {
    render() {

        const { user } = this.props

        if( user === null) {
            return <p>This User doesnt exist.</p>
        }

        const {
             name, answers, questions,  avatarURL
        } = user

        return (
            <div>
                <div className='player-box'>
                    <h3>{name}</h3>
                    <div className='scores-wrapper'>
                        <img className='question-author-avatar' alt="Author's avatar" src={avatarURL}/>
                        <div className='player-results'>
                            <h2>Answered Questions: {Object.keys(answers).length}</h2>
                            <h2>Created Questions: {questions.length}</h2>
                        </div>
                        <div className='total-score'>
                            <h2>{questions.length + Object.keys(answers).length}</h2>
                            <p>points</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({authedUser, users}, {id}) {
    const user = users[id]

    return {
        authedUser,
        user: user,
        users: users
    }
}

export default connect(mapStateToProps)(Player)