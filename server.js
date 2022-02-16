//import packages
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//express setup
const app = express()

//packages use
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

//import routes file
const todolistRoutes = require('./routes/api/TodoList')

//env file setup
require("dotenv").config();

//port setup
const PORT = process.env.PORT || 3000

//use rotes file
app.use('/api/todolist', todolistRoutes)


//express route
app.get('/',(req,res)=>{
    res.send('hello word')
})

//express listen route
app.listen(PORT, ()=>{
    console.log(`Connection Made On Port ${PORT}`)
})

