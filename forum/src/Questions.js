import React, {Component} from 'react';
import Question from './Question';
import {Router, Link} from '@reach/router';

class Questions extends Component {
    render() {

        const content = elm =>
                <li key={elm.id}>
                    <Link to={"/question/"+elm.id}>{elm.text}</Link>
                </li>
        let questions = this.props.data
        let list = this.props.data.map(content)

        return (
            <div>
                <ul>
                {list}
                </ul>
            </div>
        );
    }
}

export default Questions
