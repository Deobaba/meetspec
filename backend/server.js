const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('../config/db')
const User = require('./routes/user')

// load env varaibles
dotenv.config({path:'../config/config.env'})

connectDB()

// mount express on app
const app = express()
// body parser to convert json to object
app.use(express.json());

// mounting routes on app
app.use('/',User)

app.get('/',(req,res)=>{
    res.send('you are welcome')
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server connected on ${PORT}`)
})