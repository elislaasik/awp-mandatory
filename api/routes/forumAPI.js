const questions = [
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


var express = require('express');
var router = express.Router();

//get all data 
router.get('/', function(req, res, next) {
    res.json(questions);
});

//post a question

router.post('/post1', (req, res) => {
    const id = Math.random();
    const text = req.body.text;
    const answers = [];
    const newQuestion = {
        text: text,
        id: id,
        answers: answers
    };
    questions.push(newQuestion);
    res.json(questions);
});

//post an answer
router.post('/post2', (req, res) => {
    const id = req.body.id;
    const text = req.body.text;
    const upvote = 0;
    const downvote = 0;
    const newAnswer = {
        content: text,
        upvotes: upvote,
        downvotes: downvote
    };
    const correctQuestion = questions.find(question => question.id === parseInt(id));
    correctQuestion.answers.push(newAnswer)
    res.json(questions);
});

//update votecount


module.exports = router;