import React, { Component } from "react";
import {connect} from "react-redux";

class Result extends Component {
    render() {
        return (
            <div className='result-box'>
                <h3>Asked by $QUESTION_AUTHOR</h3>
                <div className='answer-and-avatar-wrapper'>
                    <img className='question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                    <div className='result-answers-wrapper'>
                        <h2>Results:</h2>
                        <div className='result-answer-box'>
                            <h4>become a superhero</h4>
                            <div className='results-bar'>$ANSWERS_PERCENT</div>
                            <p>$VOTES out of $TOTAL_VOTES</p>
                        </div>

                        <br/>

                        <div className='result-answer-box'>
                            <h4>become a supervillain</h4>
                            <div className='results-bar'>$ANSWERS_PERCENT</div>
                            <p>$VOTES out of $TOTAL_VOTES</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Result);