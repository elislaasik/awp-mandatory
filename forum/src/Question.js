import React, {Component} from 'react';
import PostAnswer from './PostAnswer';




class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            upvotes: 0,
            downvotes: 0 
        }
        this.onClickDownvotes = this.onClickDownvotes.bind(this)
        this.onClickUpvotes = this.onClickUpvotes.bind(this)

    }
    
    onClickUpvotes = (event) => {
        let newUpvotes = this.props.data.upvotes + 1;
        const newId = this.props.id
        this.setState({
            upvotes : newUpvotes
        })
        this.props.updateUpvotes(newId, newUpvotes);
    }
  
    onClickDownvotes = (event) => {
        let newDownvotes = this.state.downvotes +1;
        const newId = this.props.id
        this.setState({
            downvotes: newDownvotes
        })
        this.props.updateDownvotes(newId, newDownvotes);
    }
    

    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(id)
        let content = 'loading'
        let answers = []
        let questions = this.props.questionData
        
        if(question){
            content = question.text
            
            answers = question.answers.map(a => 
                {
                 

                return <div> 
                    <p>{a.content}</p>
                    <button onClick={(event) => this.onClickUpvotes(event)}> + </button>
                    <p>Sum: {a.upvotes - a.downvotes}</p>
                    <button onClick = {(event) => this.onClickDownvotes(event)}> – </button>
                </div>
               
                })
            
        }


        return (
            <div>
                
                <h2>{content}</h2>
               
                <h3>Answers</h3>
                <ul>{answers}</ul>
                
                <PostAnswer id={id} postAnswer={(answer, id, newupvote, newdownvote) => this.props.postAnswer(answer, id, newupvote, newdownvote)}/>
            </div>
        );
    }
}

export default Question
