import React, { Component } from "react";
import {connect} from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import {formatQuestion} from "../utils/helpers";
import authedUser from "../reducers/authedUser";

class Question extends Component {

    checkForAnswer = (questionAnswers, authedUser) => {
        if(questionAnswers.optionOne.votes.includes(authedUser) || questionAnswers.optionTwo.votes.includes(authedUser)) {
            return 'question-box answered'
        } else {
            return 'question-box unanswered'
        }
    }

    render() {

        const { question } = this.props
        const { authedUser } = this.props
        const {
            id, author, timestamp, optionOne, optionTwo, avatar, name
        } = question
        const { questionAnswers } = this.props

        console.log(optionOne)
        console.log(optionTwo)

        if( question === null) {
            return <p>This Question doesnt exist.</p>
        }






        return (
            <div className={this.checkForAnswer(questionAnswers, authedUser)}>
                <h3>{name} asks:</h3>
                <div className='question-and-avatar-wrapper'>
                    <img className='question-author-avatar' alt="Author's avatar" src={avatar}/>
                    <form>
                        <h2>Would You Rather...</h2>
                        <input type="radio" id="optionOne" name="options" value="OptionOne"/>
                            <label htmlFor="OptionOne">{optionOne.text}</label>

                        <br/>

                        <input type="radio" id="OptionTwo" name="options" value="OptionTwo"/>
                            <label htmlFor="OptionTwo">{optionTwo.text}</label>
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: question ? formatQuestion(question, users[question.author], authedUser ) : null,
        questionAnswers: question,
        users: users
    }
}

export default withRouter(connect(mapStateToProps)(Question))