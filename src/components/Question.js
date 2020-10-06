import React, { Component } from "react";

class Question extends Component {
    render() {
        return (
            <div className='question-box'>
                <h3>$QUESTION_AUTHOR asks:</h3>
                <div className='question-and-avatar-wrapper'>
                    <img className='question-author-avatar' alt="Author's avatar" src='https://avatars.dicebear.com/api/bottts/.svg?r=50&m=10&b=%23fff2d5&w=200&h=200&colors[]=deepOrange'/>
                    <form>
                        <h2>Would You Rather...</h2>
                        <input type="radio" id="optionOne" name="options" value="OptionOne"/>
                            <label htmlFor="OptionOne">Option One</label>

                        <br/>

                        <input type="radio" id="OptionTwo" name="options" value="OptionTwo"/>
                            <label htmlFor="OptionTwo">Option Two</label>
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Question;