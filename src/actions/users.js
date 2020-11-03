export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ASSIGN_USER_QUESTION = 'ASSIGN_USER_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function assignUserQuestion(authedUser, qid) {
    return {
        type: ASSIGN_USER_QUESTION,
        authedUser,
        qid,
    };
}

export function saveUserAnswer(auth, qid, option) {
    return {
        type: SAVE_USER_ANSWER,
        auth,
        qid,
        option,
    };
}