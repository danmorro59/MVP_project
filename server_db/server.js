const port = process.env.PORT
const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.static('public'))
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()
const Pool = require('pg').Pool
const pool = new Pool ({
  user: 'danmorro',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'practiceapi'
})


app.listen(port, (err)=>{
  if(err){
    console.log(err)
  }console.log('working')
})

