import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Questions from './Questions';


const questions = [
    {
      id: 1,
      text:'Which was first, chicken or the egg?',
      answers:[{id: 1, content:'Egg, where have you been living all this time?', votes: 8 }, {id:2, content:'Maybe chicken', votes: 1}]
    },
    {
      id: 2,
      text:'How does a running camel sound?',
      answers:[{id: 1, content: 'Tired', votes: 2}]
    },{
      id: 3,
      text:'How many floors are in the Infinite Hotel?',
      answers:[ {id: 1, content:'A loooooot', votes: 0}]
    }
  ]

it('renders Questions with all titles', () => {
    const comp = <Questions data={questions} />;
    const {getByText} = render(comp);

    expect(getByText(questions[0].text)).toBeInTheDocument();
    expect(getByText(questions[1].text)).toBeInTheDocument();
    expect(getByText(questions[2].text)).toBeInTheDocument();
});

it('does not render Question answers', () => {
    const comp = <Questions data={questions} />;
    const {queryByText} = render(comp);

    expect(queryByText(questions[0].answers[0].content)).toBeNull();
    expect(queryByText(questions[0].answers[1].content)).toBeNull();
});