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
  const date = new Date().getDay()
  const answer = (date === 5) ? 'Yes!' : 'Nej.'
  const rColor = (date === 5) ? '#7B9C7F' : '#8B1714'
  const userName = req.body.user_name

  const botPayload = {
    text: 'Är det fredag?',
    attachment: {
      text: answer,
      color: rColor
    }
  }
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload)
  } else {
    return res.status(200).end()
  }
})