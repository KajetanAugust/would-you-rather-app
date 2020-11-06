import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Result from "./Result";
import PageNotFound from "./PageNotFound";

class PollDetails extends Component {

    checkIfAnswered = (authedUser, question) => {
        return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
    }

    render() {
        const { authedUser, questions } = this.props
        let id = window.location.pathname.slice(10);
        const question = questions[id]
        console.log(id)
        console.log(questions)
        console.log(authedUser)

        return (

            <div>
                {
                    question
                        ?
                            this.checkIfAnswered(authedUser, question) === false
                                ?
                                    <Question
                                        id={id}
                                        key={id}
                                    />
                                :
                                    <Result
                                        id={id}
                                    />
                        :
                            <PageNotFound />

                }
            </div>
        );
    }
}

function mapStateToProps ({ questions, authedUser }) {
    return {
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(PollDetails);