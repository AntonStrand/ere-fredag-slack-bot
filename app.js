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
  //const answer = (new Date().getDay === 5) ? 'Yes!' : 'Nej.'
  return {
    //text: `Är det fredag? \n ${answer}`
    response_type: "in_channel",
    text: 'Hello world'
  }
})