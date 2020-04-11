import React, {Component} from 'react';
import {Router, Link} from '@reach/router';
import Questions from './Questions'
import Question from './Question'
import AskQuestion from './AskQuestion';
import PostAnswer from './PostAnswer';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      questions: [
        {
          id: 1,
          text:'Which was first, chicken or the egg?',
          answers:[{content:'Egg, where have you been living all this time?', upvotes:8, downvotes:0 }, { content:'Maybe chicken', upvotes: 0, downvotes: 1}]
        },
        {
          id: 2,
          text:'How does a running camel sound?',
          answers:[{conteny: 'Tired', upvotes: 2, downvotes:0}]
        },{
          id: 3,
          text:'How many floors are in the Infinite Hotel?',
          answers:[ {content:'A loooooot', upvotes:0, downvotes:0}]
        }
      ]
    }
  }

  getQuestion(id){
    return this.state.questions.find(question => question.id === parseInt(id))
  }

  addQuestion(id, text,  answers){
    const newQuestion = {id, text,  answers}
      const currentState = this.state.questions
      currentState.push(newQuestion)
      this.setState(_ => ({
        
        questions: currentState
      }));
      console.log(currentState)
  }
  postAnswer(answer, id, newupvote, newdownvote){
    const newAnswer = answer
    const correctQuestion = this.state.questions.find(question => question.id === parseInt(id));
    correctQuestion.answers.push({content: newAnswer, upvotes: newupvote, downvotes:newdownvote})
    const currentState = this.state.questions

      this.setState(_ => ({
        
        questions: currentState
      }));
      console.log(currentState)

  }
  updateUpvotes(id, upvotes){
    const newUpvote = upvotes
    const correctQuestion = this.state.questions.find(question => question.id === parseInt(id));
     correctQuestion.upvotes =+ newUpvote
    const currentState = this.state.questions

      this.setState(_ => ({
        
        questions: currentState
      }));
  }
  updateDownvotes(id, downvotes){
    const newDownvote = downvotes
    const correctQuestion = this.state.questions.find(question => question.id === parseInt(id));
     correctQuestion.downvotes =+ newDownvote
    const currentState = this.state.questions

      this.setState(_ => ({
        
        questions: currentState
      }));
  }


  render(){
    return (
      
      <div className="App">
        <Link to="/"><h1>Ask and you shall receive</h1></Link>
        <h3></h3>
        <Router>
          <Questions data={this.state.questions} path="/"/>
          <Question path="/question/:id" 
          getQuestion={(id) => this.getQuestion(id)}
          postAnswer={(answer, id, newupvote, newdownvote) => this.postAnswer(answer, id, newupvote, newdownvote)}
          updateUpvotes={(id, upvotes) => this.updateUpvotes(id, upvotes)}
          updateDownvotes={(id,downvotes) => this.updateDownvotes(id, downvotes)}
          >
            </Question>
        
          <AskQuestion path="/AskQuestion" submit={
            (id, text, answers) => this.addQuestion(id, text, answers)}/>
        </Router>
        <button><Link to="/AskQuestion">Ask a question</Link></button>
        
      </div>
    );
  }
}

export default App;
