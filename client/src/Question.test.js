import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Question from './Question';

// Some test data for the tests.
const question = {
    id: 1,
    text: "How do I return the response from an Observable in Angular 2?",
    answers: [
        {id: 1, content: "Observables are lazy so you have to subscribe to get the value.", votes: 5},
        {id: 2, content: "You can use asyncPipe", votes: -2},
        {id: 3, content: "The reason that it's undefined is that you are making an asynchronous operation", votes: 3},
    ]
};


it('renders the actual question', () => {
    const comp = <Question getQuestion={id => question}/>
    const {getByText, getByLabelText} = render(comp);
    expect(getByText(question.text)).toBeInTheDocument();
});

it('renders all answers for a Question', () => {
    const comp = <Question getQuestion={id => question}/>
    const {getByText, getByLabelText} = render(comp);
    expect(getByText(question.answers[0].content)).toBeInTheDocument();
    expect(getByText(question.answers[1].content)).toBeInTheDocument();
    expect(getByText(question.answers[2].content)).toBeInTheDocument();
});

