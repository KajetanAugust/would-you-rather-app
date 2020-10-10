import React, { Component } from "react";
import {connect} from "react-redux";

class QuestionList extends Component {
    render() {
        return (
            <div className='question-lists'>
                <div className='answered-questions'>
                    <h2>Answered Questions</h2>
                    <div className='list-questions-wrapper'>
                        <div className='list-question-box'>
                            <h3>$QUESTION_AUTHOR asks:</h3>
                            <div className='list-question-and-avatar-wrapper'>
                                <img className='list-question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                                <form>
                                    <h4>Would You Rather...</h4>
                                    <p>Option One</p>
                                    <p>Option Two</p>
                                    <br/>
                                    <button type='submit'>Show Question</button>
                                </form>
                            </div>
                        </div>

                        <div className='list-question-box'>
                            <h3>$QUESTION_AUTHOR asks:</h3>
                            <div className='list-question-and-avatar-wrapper'>
                                <img className='list-question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                                <form>
                                    <h4>Would You Rather...</h4>
                                    <p>Option One</p>
                                    <p>Option Two</p>
                                    <br/>
                                    <button type='submit'>Show Question</button>
                                </form>
                            </div>
                        </div>

                        <div className='list-question-box'>
                            <h3>$QUESTION_AUTHOR asks:</h3>
                            <div className='list-question-and-avatar-wrapper'>
                                <img className='list-question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                                <form>
                                    <h4>Would You Rather...</h4>
                                    <p>Option One</p>
                                    <p>Option Two</p>
                                    <br/>
                                    <button type='submit'>Show Question</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='unanswered-questions'>
                    <h2>Unanswered Questions</h2>
                    <div className='list-questions-wrapper'>
                        <div className='list-question-box'>
                            <h3>$QUESTION_AUTHOR asks:</h3>
                            <div className='list-question-and-avatar-wrapper'>
                                <img className='list-question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                                <form>
                                    <h4>Would You Rather...</h4>
                                    <p>Option One</p>
                                    <p>Option Two</p>
                                    <br/>
                                    <button type='submit'>Show Question</button>
                                </form>
                            </div>
                        </div>

                        <div className='list-question-box'>
                            <h3>$QUESTION_AUTHOR asks:</h3>
                            <div className='list-question-and-avatar-wrapper'>
                                <img className='list-question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                                <form>
                                    <h4>Would You Rather...</h4>
                                    <p>Option One</p>
                                    <p>Option Two</p>
                                    <br/>
                                    <button type='submit'>Show Question</button>
                                </form>
                            </div>
                        </div>

                        <div className='list-question-box'>
                            <h3>$QUESTION_AUTHOR asks:</h3>
                            <div className='list-question-and-avatar-wrapper'>
                                <img className='list-question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                                <form>
                                    <h4>Would You Rather...</h4>
                                    <p>Option One</p>
                                    <p>Option Two</p>
                                    <br/>
                                    <button type='submit'>Show Question</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(QuestionList);