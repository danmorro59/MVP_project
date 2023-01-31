const port = process.env.PORT
const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.static('public'))
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()
const Pool = require('pg').Pool
const client = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

app.post('/api',(req,res)=>{
  console.log('hello')
})
app.listen(4000, (err)=>{
  if(err){
    console.log(err)
  }console.log('working')
})

