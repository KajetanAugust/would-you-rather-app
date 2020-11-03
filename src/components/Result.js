import React, { Component } from "react";
import {connect} from "react-redux";
import { withRouter  } from "react-router-dom";

class Result extends Component {

        checkUserAnswer = (questionToCheck, authedUser) => {
            if(questionToCheck.includes(authedUser)) {
                return 'result-answer-box users-answer'
            } else {
                return 'result-answer-box'
            }
        }

    render() {

        // let id = window.location.pathname.slice(9);
        let id = this.props.id
        // console.log(id)
        const question = this.props.questions[id]
        // console.log(question)
        const userName = this.props.users[question.author].name
        // console.log(userName)
        const { authedUser } = this.props


        return (
            <div className='result-box'>
                <h3>Asked by {userName}:</h3>
                <div className='answer-and-avatar-wrapper'>
                    <img className='question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                    <div className='result-answers-wrapper'>
                        <h2>Results:</h2>
                        <div className={this.checkUserAnswer(question.optionOne.votes, authedUser)}>
                            <h4>{question.optionOne.text}</h4>
                            <div className='results-bar'>{Math.floor((question.optionOne.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length))*100)}%</div>
                            <p>{question.optionOne.votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length}</p>
                        </div>

                        <br/>

                        <div className={this.checkUserAnswer(question.optionTwo.votes, authedUser)}>
                            <h4>{question.optionTwo.text}</h4>
                            <div className='results-bar'>{Math.floor((question.optionTwo.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length))*100)}%</div>
                            <p>{question.optionTwo.votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    return {
        questions,
        users,
        authedUser
    };
}

export default withRouter(connect(mapStateToProps)(Result));