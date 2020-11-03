import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionList extends Component {

    render() {
            // const { questions } = this.props
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

function mapStateToProps ({ questions }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        questions
    }
}

export default connect(mapStateToProps)(QuestionList);