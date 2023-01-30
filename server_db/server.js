const port = process.env. PORT || 8000;
const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())
const Pool = require('pg').Pool
const pool = new Pool ({
  user: 'danmorro',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'practiceapi'
})
app.use(express.static('./public'))

