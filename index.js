const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const {
  errorFunction, getAllStudents, addNewStudent, updateStudent, deleteStudent
} = require('./controllers/controller-students')
const methodOverride = require('method-override')

const PORT = 1800

const app = express()

app.use(cors())
app.use(express.static('client/build'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/api/students', getAllStudents)
app.post('/api/students', bodyParser.json(), addNewStudent)
app.put('/api/students/:id', bodyParser.json(), updateStudent)
app.delete('/api/students/:id', deleteStudent)

app.get('*', errorFunction)

app.listen(process.env.PORT || PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})
