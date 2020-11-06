import React, { Component } from "react";
import {connect} from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import {Redirect} from "react-router-dom";

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        redirect: false
    }

    handleInputs = (e) => {
        const inputName = e.target.id
        const inputValue = e.target.value

        if( inputName === 'option-one-text' ) {
            this.setState({
                optionOne: inputValue
            })
            console.log('option one:', this.state.optionOne)
        }

        if( inputName === 'option-two-text' ) {
            this.setState({
                optionTwo: inputValue
            })
            console.log('option two:', this.state.optionTwo)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { saveNewQuestion } = this.props
        const { optionOne, optionTwo} = this.state
        saveNewQuestion(optionOne, optionTwo)
        this.setState({
            redirect: true
        })
    }

    render() {

        const { redirect } = this.state

        if(redirect === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='create-question'>
                <h2>Create New Question</h2>
                <h3>Would you rather...</h3>
                <input
                    type='text'
                    placeholder='Option one text'
                    id='option-one-text'
                    onKeyUp={(e) => this.handleInputs(e)}
                />
                <h3>OR</h3>
                <input
                    type='text'
                    placeholder='Option two text'
                    id='option-two-text'
                    onKeyUp={(e) => this.handleInputs(e)}
                />
                <button
                    onClick={(e) => this.handleSubmit(e)}
                    disabled = {this.state.optionOne === '' || this.state.optionTwo === ''}
                >Submit</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveNewQuestion: (optionOne, optionTwo) => {
            dispatch(handleAddQuestion(optionOne, optionTwo));
        },
    };
}

function mapStateToProps({ users, authedUser }) {
    const activeUser = users[authedUser]
    return {
        activeUser
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);