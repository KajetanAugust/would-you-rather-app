import React, { Component } from "react";
import {connect} from "react-redux";
import Question from "./Question";

class QuestionList extends Component {
    render() {
            const { questions } = this.props
        return (
            <div className='question-lists'>
                <div className='answered-questions'>
                    <h2>Answered Questions</h2>
                    <div className='list-questions-wrapper'>

                        {
                            this.props.questionsIds.map((id) => (
                            <Question
                                id={id}
                                key={id}
                            />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList);