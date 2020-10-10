import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import {showLoading, hideLoading} from "react-redux-loading";

export const RECIEVE_QUESTIONS ='RECIEVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (question) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            author: authedUser,
            question
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

export function recieveQuestions (questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions,
    }
}

function answerQuestion ( qid, authedUser, answer ) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleAnswerQuestion ( qid, authedUser, answer ) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
            .then((question) => dispatch(answerQuestion( qid, authedUser, answer )))
            .then(() => dispatch(hideLoading()))
    }
}