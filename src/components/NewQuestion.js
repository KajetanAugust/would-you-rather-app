import React, { Component } from "react";
import {connect} from "react-redux";

class NewQuestion extends Component {
    render() {
        return (
            <div className='create-question'>
                <h2>Create New Question</h2>
                <h3>Would you rather...</h3>
                <input
                    type='text'
                    placeholder='Option one text'
                />
                <h3>OR</h3>
                <input
                    type='text'
                    placeholder='Option two text'
                />
                <button type='submit'>Submit</button>
            </div>
        );
    }
}

export default connect()(NewQuestion);