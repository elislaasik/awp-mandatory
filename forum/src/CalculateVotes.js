import React, {Component} from 'react';

class CalculateVotes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            upvotes: 0,
            downvotes: 0 
        }
        this.onClickDownvotes = this.onClickDownvotes.bind(this)
        this.onClickUpvotes = this.onClickUpvotes.bind(this)

    }
    onClickUpvotes(event) {
        let newUpvotes = this.props.data.upvotes + 1;
        const newId = this.props.id
        this.setState({
            upvotes : newUpvotes
        })
        this.props.updateUpvotes(newId, newUpvotes);
    }
  
    onClickDownvotes(event) {
        let newDownvotes = this.state.downvotes +1;
        const newId = this.props.id
        this.setState({
            downvotes: newDownvotes
        })
        this.props.updateDownvotes(newId, newDownvotes);
    }

    render() {
        return (
            <div>
                <button onClick={(event) => this.onClickUpvotes(event)}> + </button>
                <p>Sum: {this.state.upvotes - this.state.downvotes}</p>
                <button onClick = {(event) => this.onClickDownvotes(event)}> – </button>
                
            </div>
        );
    }
}

export default CalculateVotes;