export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion ( question, author ) {
    const { id, timestamp, optionOneText, optionTwoText} = question
    const {name, avatarURL} = author

    return {
        name,
        id,
        timestamp,
        avatar: avatarURL,
        optionOne: {
            votes: [],
            text: optionOneText
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}
