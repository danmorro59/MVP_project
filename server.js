const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.static('public'))
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 4000
const Pool = require('pg').Pool
const client = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

app.get('/api',(req,res)=>{
  res.json('hello')
})
app.listen(port, (err)=>{
  if(err){
    console.log(err)
  }console.log('working')
})

