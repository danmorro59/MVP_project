const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.static('public'))
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
app.use(express.json())
dotenv.config()
const port = process.env.PORT || 4000
const Pool = require('pg').Pool
const client = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

app.post('/workout', async(req,res)=>{
    let {theworkout, day} = req.body
    await client.query(`INSERT into workout (theworkout,day) VALUES ('${theworkout}','${day}')`);
    res.json('added')
  })
app.get('/workout', async(req,res)=>{
    const allWork = await client.query('SELECT * FROM workout')
    res.json(allWork.rows)
  })
app.delete('/workout', async(req,res)=>{
  await client.query('DELETE * from workout');
  res.json('deleted')
})

app.listen(port,()=>{
  console.log(`working on port ${port}`)
})