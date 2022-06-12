// Express to run server and routes
const express = require('express')

// instance of app
const app = express()

// Dependencies
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const data = []

// create port number that server  will listen on
const port = 3000
const hostName = '127.0.0.1'

// point server to main project file
app.use(express.static('MainFiles'))

app.get('/', function (req, res) {
  res.send('hallo hares')
  console.log(res.body)
})

app.post('/', (req,res)=>{
  data.push(req.body);
  console.log(data)
})



server = app.listen(port, hostName, () => {
  console.log(`server running on port : ${port}`)
})
