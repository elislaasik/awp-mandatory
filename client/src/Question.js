import React, {Component} from 'react';
import PostAnswer from './PostAnswer';

class Question extends Component {
    constructor(props){
        super(props);
        
        this.state = {
              question: this.props.getQuestion(this.props.id)
        }
       // this.onVoteClick = this.onVoteClick.bind(this)
 }

    
onVoteClick(answerId){
    /*const questionId = this.state.question.id
    const rightAnswer = this.state.question.answers.find(answer => answer.id === parseInt(answerId))
 
    const newVote = rightAnswer.votes + 1
    this.state.question.rightAnswer.votes =  newVote
    const currentState = this.state.questionss
      this.setState(_ => ({
        
        question:currentState
      }));
      console.log(currentState)
      this.props.updateQuestion(questionId, answerId, newVote)
       //questionState 
       <button onClick={() => this.onVoteClick(a.id)}> + </button>*/
 //  TODO this. set state update the questions answer based on the id
}
    render() {
        const id = this.props._id;
        const question = this.props.getQuestion(id)
        let content = 'loading'
        let answers = []
        
        if(question){
            content = question.text
            
            answers = question.answers.map(a => 
                {
                 
                return <div className="answer"> 
                    <p>{a.content}</p>
                    <p>Sum: {a.votes}</p>
                </div>
               
                })
        }
        
        return (
            <div className="question-component">
                <h2>{content}</h2>
                <h3>Answers</h3>
                <ul>{answers}</ul>
                <PostAnswer id={id} postAnswer={(answer, id) => this.props.postAnswer(answer, id)}/>
            </div>
        );
    }
}

export default Question
