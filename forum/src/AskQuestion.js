import React, {Component} from 'react';
import {navigate} from '@reach/router';

class AskQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
                questionInput: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
 }
    handleChange({target}){
            this.setState({
                    [target.name]:target.value
                    });     
    }

    handleSubmit(event){
        event.preventDefault();
                const newQuestion = this.state.questionInput
                const newId = this.state.questionInput
                const newAnswers = [] 
                this.props.submit(newId ,newQuestion, newAnswers)
                navigate("/")
                
    }

    render() {
       
        return (
            <div>
                <h2>Ask a question</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                                <label> New question:
                                        <input type="text" onChange={this.handleChange} value={this.state.text}  name="questionInput"/>
                                </label> <br/>
                                <input type="submit" value="submit"/>
                        </form>

                
            </div>
        );
    }
}

export default AskQuestion
