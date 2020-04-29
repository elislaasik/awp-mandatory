/**** External libraries ****/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const models = require("./db");

/**** Configuration ****/
const appName = "Ask and you shall receive";
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());

(async (_) => {
  try {
    const url = process.env.MONGO_URL;
    //'mongodb+srv://forumDB:forumDB@forumdb-zr6ni.mongodb.net/test?retryWrites=true&w=majority'
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Success!");
  } catch (error) {
    console.error("Connection failed!", error);
  }
})();

/**** Routes ****/
app.get("/", async (req, res) => res.json(await models.Question.find({})));

app.post("/post1", async (req, res) => {
  try {
    const newPost = new models.Question({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text,
        answers:[]
    });
    await newPost.save();
  } catch (error) {
    console.error(error);
  }
  res.json(await models.Question.find({}));
});

app.post("/post2", async (req, res) => {
  try {
    const id = req.body.id
    const correctQuestion = models.Question.find(question => question.id === parseInt(id));
    const newAnswer = {
      id: new mongoose.Types.ObjectId() , 
      content: req.body.answer,
      votes: 0
  };
    await correctQuestion.newAnswer.save();
  } catch (error) {
    console.error(error);
  }
  res.json(await models.Question.find({}));
});

// app.put("/post2", async (req, res) => {
//   try {
//     const id = req.body.id;
//     const content = req.body.answer
//     const newAnswer = {
//       id: new mongoose.Types.ObjectId() , 
//       content: content,
//       votes: 0
//     }
//     const correctQuestion = models.Question.findById(id);
//     correctQuestion.answers.push(newAnswer)

//     await newAnswer.save();
//   } catch (error) {
//     console.error(error);
//   }
//   res.json(await models.Question.find({}));
// });
app.post("/post3", async (req, res) => {
  try {
    const id = req.body.id;
    const content = req.body.answer
    console.log(req.body.answer)
    const newAnswer = {
      content: req.body.answer,
      votes: 0
    }
    //const correctQuestion = models.Question.findById(id);
    //correctQuestion.answers.push(newAnswer)
    await models.Question.findOneAndUpdate({_id: id}, {$push:{answers: newAnswer}})

    //await newAnswer.save();
  } catch (error) {
    console.error(error);
  }
  res.json(await models.Question.find({}));
});
//   correctQuestion.answers.push(newAnswer)
//   res.json(questions);
// });



app.listen(port, () =>
  console.log(`${appName} API launching on port ${port}!`)
);