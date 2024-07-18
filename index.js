const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{

    res.send("Hello sexy gay...")

})


app.get('/log',(req,res)=>{
    res.send('<h1> Hi arun gay, show your dick...</h1>')

})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Hello gay u tube</h2>")

})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
})