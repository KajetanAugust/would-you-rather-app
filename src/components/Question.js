import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatQuestion } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/questions";

class Question extends Component {

    state = {
        showResults: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const options = document.getElementsByName('options')
        let selectedOption;
        console.log(this.props.question)
        for (let i = 0; i < options.length; i++) {
            if(options[i].checked) {
                selectedOption = options[i].value
            }
        }

        this.props.answerQuestion(this.props.id, selectedOption)
        console.log(this.props.question)
        console.log(this.props.id)
        // this.setState({
        //     showResults: true
        // })

    }

    render() {

        const { question } = this.props
        const {
            id, optionOne, optionTwo, avatar, name
        } = question

        console.log(optionOne)
        console.log(optionTwo)

        if( question === null ) {
            return <p>This Question doesnt exist.</p>
        }

        if(this.state.showResults === true) {
            return <Redirect to={`/question/${this.props.id}`} />
        }

        return (
            <div className='question-box'>
                <h3>{name} asks:</h3>

                    {
                        this.props.fromList
                            ?
                                this.props.answered === false
                                    ?
                                    <div className='question-and-avatar-wrapper'>
                                        <img className='question-author-avatar' alt="Author's avatar" src={avatar}/>
                                        <div>
                                            <h2>Would You Rather...</h2>
                                            <p className='options-preview'>{optionOne.text}</p>
                                            <h2 className='dots'>...</h2>
                                            <Link to={`/question/${id}`}><button>Answer now!</button></Link>
                                        </div>
                                    </div>
                                    :
                                        <div className='question-and-avatar-wrapper'>
                                            <img className='question-author-avatar' alt="Author's avatar" src={avatar}/>
                                            <div>
                                                <h2>Would You Rather...</h2>
                                                <p className='options-preview'>{optionOne.text}</p>
                                                <h2 className='dots'>...</h2>
                                                <Link to={`/question/${id}`}><button>See answers</button></Link>
                                            </div>
                                        </div>
                            :
                                <div className='question-and-avatar-wrapper'>
                                    <img className='question-author-avatar' alt="Author's avatar" src={avatar}/>
                                    <form
                                        onSubmit={(e) => this.handleSubmit(e)}
                                    >
                                        <h2>Would You Rather...</h2>
                                        <input type="radio" id="optionOne" name="options" value="optionOne"  />
                                        <label htmlFor="OptionOne">{optionOne.text}</label>

                                        <br/>

                                        <input type="radio" id="OptionTwo" name="options" value="optionTwo"/>
                                        <label htmlFor="OptionTwo">{optionTwo.text}</label>
                                        <br />
                                        <button type='submit'>Submit</button>
                                    </form>
                                </div>
                    }

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        answerQuestion: (id, answer) => {
            dispatch(handleAnswerQuestion(id, answer));
        },
    };
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        question: question ? formatQuestion(question, users[question.author], authedUser ) : null,
        users: users
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question))