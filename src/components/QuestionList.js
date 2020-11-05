import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionList extends Component {

    state = {
        showQuestions:true
    }

    switchQuestions = () => {
        const changeDisplay = !this.state.showQuestions
        this.setState({
            showQuestions: changeDisplay
        })
    }

    filterQuestions = ( value, questions, authedUser ) => {
        const questionsKeys = Object.keys(questions)
        console.log(questionsKeys)
        let filteredQuestions = [];

        if (value === true) {
            for (let i = 0; i < questionsKeys.length; i++) {
                let key = questionsKeys[i]
                console.log(questions[key])

                //TODO: Filtering not working yet, I can select and log all questions so that's the start

                // if (questions[key].optionOne.votes.includes(authedUser) || questions[key].optionTwo.votes.includes(authedUser)) {
                //     filteredQuestions.push(questions[key].id)
                // }
            }

            if (value === false) {
                for (let i = 0; i < questions.length; i++) {
                    if (!questions[i].optionOne.votes.includes(authedUser) && !questions[i].optionTwo.votes.includes(authedUser)) {
                        filteredQuestions.push(questions[i].id)
                    }
                }
                return filteredQuestions;
            }
        }
    }

    render() {

        const { questions, authedUser } = this.props

        const answered = this.filterQuestions(true, questions, authedUser )
        console.log(answered)


        return (
            <div className='question-lists'>
                <div className='questions'>
                    <h2 className='answered'>Answered Questions</h2>
                    <h2 className='unanswered'>Unanswered Questions</h2>
                        {
                            this.props.questionsIds.map((id) => (
                            <Question
                                id={id}
                                key={id}
                                fromList={true}
                            />
                            ))
                        }
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ questions, authedUser }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        questions: questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList);