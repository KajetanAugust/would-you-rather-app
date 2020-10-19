import {
    ADD_QUESTION,
    ANSWER_QUESTION,
    RECIEVE_QUESTIONS
} from "../actions/questions";


export default function tweets (state = {}, action) {
    switch (action.type) {

        case RECIEVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION :
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],

                        votes:state[action.qid][action.answer].votes.concat(action.authedUser)
                    }
                }
            }

        case ADD_QUESTION :
            return  {
                ...state,
                [action.question.id]: action.question,
            }
        default :
            return state
    }
}