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
  const rColor = (date === 5) ? '#36a64f' : '#8B1714'
  const userName = req.body.user_name

  const botPayload = {
    attachments: [{
      fallback: 'Visar om det är fredag.',
      title: 'Är det fredag?',
      title_link: 'http://erefredag.se/',
      text: answer,
      color: rColor
    }]
  }
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload)
  } else {
    return res.status(200).end()
  }
})

app.post('/idag', function (req, res, next) {
  const date = new Date().getDay()
  const day = getDayByNumber(date)
  const userName = req.body.user_name

  const botPayload = {
    attachments: [{
      fallback: 'Visar vad det är för dag.',
      title: 'Vad är det för dag?',
      text: day + '.'
    }]
  }
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload)
  } else {
    return res.status(200).end()
  }
})

function getDayByNumber(dayNumber) {
  let day
  switch (dayNumber) {
    case 0:
      day = 'Söndag'
      break

    case 1:
      day = 'Måndag'
      break

    case 2:
      day = 'Tisdag'
      break

    case 3:
      day = 'Onsdag'
      break

    case 4:
      break
      day = 'Torsdag'

    case 5:
      break
      day = 'Fredag'

    case 6:
      break
      day = 'Lördag'
  
    default:
      day = 'Kunde inte hitta dag'
      break;
  }
  return day
}