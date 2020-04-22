import React, {Component} from 'react';
import {Router, Link} from '@reach/router';
import Questions from './Questions'
import Question from './Question'
import AskQuestion from './AskQuestion';
import PostAnswer from './PostAnswer';
import './styles/App.scss';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      questions: []
    }

    this.addQuestion = this.addQuestion.bind(this)
  }

  async callAPI() {
    let data = await fetch("http://localhost:9000/forumAPI");
    if (data) data = await data.json();
    this.setState(_ => ({
        questions: data
    }));
}

componentDidMount(){
    this.callAPI();
}

  getQuestion(id){
    return this.state.questions.find(question => question.id === parseInt(id))
    
  }

  async addQuestion(text){
    const response = await fetch('http://localhost:9000/forumAPI/post1', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            "text": text 
        })
    });
    const data = await response.json();
    this.callAPI()
    console.log(data)
}


  async postAnswer(answer, id){
    const response = await fetch('http://localhost:9000/forumAPI/post2', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          "id": id ,
            "answer": answer 
        })
    });
    const data = await response.json();
    this.callAPI()
}
updateQuestion(questionId, answerId, newVote){
 
}
  
  render(){
    return (
      
      <div className="App">
        <div className="header">
        <Link to="/"><h1 className="logo">Ask and you shall receive</h1></Link>
        </div>
        <div className="main">
        <Router>
          <Questions data={this.state.questions} path="/"/>
          <Question path="/question/:id" 
          getQuestion={(id) => this.getQuestion(id)}
          postAnswer={(answer, id) => this.postAnswer(answer, id)}
          updateQuestion = {(questionId, answerId, newVote) => this.updateQuestion(questionId, answerId, newVote)}
          >
            </Question>
        
          <AskQuestion path="/AskQuestion" submit={ ( text) => this.addQuestion( text)}/>
        </Router>
        </div>
        
          <button className="ask-question"><Link to="/AskQuestion">Ask a question</Link></button>
        
      </div>
    );
  }
}

export default App;
