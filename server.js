//const http = require('http')
const express =  require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const EmployeeRoute = require('./routes/employee')
mongoose.connect('mongodb://localhost:27017/testdb')//,{useUnifiedTopology: true, useCreateIndex: false})
const db = mongoose.connection
db.on('error',(err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('Database conection estabelecida')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
console.log('Servidor rodando em porta ${PORT}')
})
app.use('/api/employee', EmployeeRoute)









