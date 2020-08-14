const express = require('express')
const router = require ('./src/Router/router')
require('./src/Config/database')

const port = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(router)



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})