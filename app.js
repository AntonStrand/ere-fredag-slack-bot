const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 1337

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))

// test route
app.get('/', function (req, res) { res.status(200).send(`You're connected!`)})

app.listen(port, function () {
  console.log('Listening on port ' + port)
})

app.post('/fredag', function (req, res, next) {
  var answer = (new Date().getDay() === 5) ? 'Yes!' : 'Nej.'
  var userName = req.body.user_name
  var botPayload = {
    text : 'Är det fredag? \n' + answer
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload)
  } else {
    return res.status(200).end()
  }
})