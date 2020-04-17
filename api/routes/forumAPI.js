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


var express = require('express');
var router = express.Router();


//get all data 
router.get('/', function(req, res, next) {
    res.json(questions);
});

//post a question

router.post('/post1', (req, res) => {
    //const id = Math.random();
    const text = req.body.text;
    const answers = [];
    const id = questions.length + 1
    const newQuestion = {
      id: id,
      text: text,
      answers: answers
    };
    questions.push(newQuestion);
    res.json(questions);
});

//post an answer
router.post('/post2', (req, res) => {
    const id = req.body.id;
    const content = req.body.answer;
    const correctQuestion = questions.find(qu
      estion => question.id === parseInt(id));
    const answerId = correctQuestion.answers.length + 1
    const votes = 0;
    const newAnswer = {
        id: answerId , 
        content: content,
        votes: votes
    };
    
    correctQuestion.answers.push(newAnswer)
    res.json(questions);
});

//update votecount


module.exports = router;