import React, { Component } from "react";
import {connect} from "react-redux";
import {handleAddQuestion} from "../actions/questions";
import { formatQuestion } from "../utils/helpers";
import { formatDate } from "../utils/helpers";

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
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

    // TODO: fix handleSubmit function, it now sends empty optionOne and optionTwo values

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { saveNewQuestion } = this.props
    //     const { activeUser } = this.props
    //     // const { optionOne, optionTwo } = this.state
    //     const optionOne = { text: this.state.optionOne }
    //     const optionTwo = { text: this.state.optionTwo }
    //     // console.log(inputValues)
    //     saveNewQuestion( activeUser, {optionOne, optionTwo} )
    // }


    render() {
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
                >Submit</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveNewQuestion: (activeUser, question) => {
            dispatch(handleAddQuestion(activeUser, question));
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