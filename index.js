const express = require('express')
// const resume = require('./resume')  ... no longer need the resume data since that it lives in controller now
const { getAllResume, getExpById, createNewExp } = require('./controllers/resumeC')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
// app.use(bodyParser.json())

app.get('/', (request, response) => response.render('index'))

app.get('/resume', getAllResume)

app.get('/experience/:id', getExpById)

app.post('/experience', createNewExp)

app.all('*', (request, response) => response.sendStatus(404))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
