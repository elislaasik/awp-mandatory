import React, {Component} from 'react';


class PostAnswer extends Component {
    constructor(props){
        super(props);
        this.state = {
                answerInput: ''
                //questionId: ''
        }

        this.answerChange = this.answerChange.bind(this)
        this.answerSubmit = this.answerSubmit.bind(this)
 }


 answerChange({target}){
    this.setState({
            [target.name]:target.value
            });     
}

answerSubmit(event){
event.preventDefault();
        const newAnswer = this.state.answerInput
        const newId = this.props.id
        this.props.postAnswer(newAnswer, newId);
}

    render() {
        
        return (
            <div className="post-answer">
                <form className="form" onSubmit={this.answerSubmit}>
                                <label> Post answer:
                                        <input className="answer-input" type="text" onChange={this.answerChange} value={this.state.text}  name="answerInput"/>
                                </label> <br/>
                                <input type="submit" className="answer-button" value="Submit"/>
                        </form>
            </div>
        );
    }
}

export default PostAnswer
