import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionList extends Component {

    state = {
        showQuestions:false
    }

    switchQuestions = (e) => {
        e.preventDefault()
        const changeDisplay = !this.state.showQuestions
        this.setState({
            showQuestions: changeDisplay
        })
    }

    filterQuestions = ( value, questions, authedUser ) => {

        const questionsKeys = this.props.questionsIds

        let filteredQuestions = [];

        if (value === true) {
            for (let i = 0; i < questionsKeys.length; i++) {
                let key = questionsKeys[i]

                if (questions[key].optionOne.votes.includes(authedUser) || questions[key].optionTwo.votes.includes(authedUser)) {
                    filteredQuestions.push(questions[key].id)
                }
            }
        }

        if (value === false) {
            for (let i = 0; i < questionsKeys.length; i++) {
                let key = questionsKeys[i]

                if(questions[key].optionOne.votes.includes(authedUser) !== true && questions[key].optionTwo.votes.includes(authedUser) !== true) {
                    filteredQuestions.push(questions[key].id)
                }
            }
        }
        return filteredQuestions.sort(function(a,b){return questions[b].timestamp - questions[a].timestamp});
    }

    render() {

        const { questions, authedUser } = this.props
        const { showQuestions } = this.state
        console.log(authedUser)
        const answered = this.filterQuestions(true, questions, authedUser ) || []
        console.log(answered)
        const unanswered = this.filterQuestions(false, questions, authedUser ) || []
        console.log(unanswered)

        return (
            <div className='question-lists'>
                <div>
                    <button
                        onClick={(e) => {this.switchQuestions(e)}}
                        disabled={!showQuestions}
                    ><h2 className='answered'>Unanswered Questions</h2>
                    </button>
                    <button
                        onClick={(e) => {this.switchQuestions(e)}}
                        disabled={showQuestions}
                    ><h2 className='answered' >Answered Questions</h2>
                    </button>
                </div>
                {
                    showQuestions === true
                        ?
                        <div className='answered-questions'>
                            <h2 className='answered-title'>Answered Questions</h2>
                            {
                                answered.map((id) => (
                                    <Question
                                        id={id}
                                        key={id}
                                        fromList = {true}
                                        answered = {true}
                                    />
                                ))
                            }
                        </div>
                        :
                        <div className='unanswered-questions'>
                            <h2 className='unanswered-title'>Unanswered Questions</h2>
                            {
                                unanswered.map((id) => (
                                    <Question
                                        id={id}
                                        key={id}
                                        fromList = {true}
                                        answered = {false}
                                    />
                                ))
                            }
                        </div>
                }
            </div>
        );
    }
}

function mapStateToProps ({ questions, authedUser }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((b,a) => questions[b].timestamp - questions[a].timestamp),
        questions: questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList);