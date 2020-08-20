const express = require('express')
const router = require ('./src/Router/router')
const path = require('path')
require('./src/Config/database')

const port = process.env.PORT || 5000
const HOST = '0.0.0.0'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// sever para verificar as foto no endpoint localhost:5000/files/'mome do arquivo'
app.use('/files',express.static(path.resolve(__dirname, 'uploads')))
app.use(router)

app.listen(port,HOST,()=>{
    
    console.log(`Runing on http://${HOST}:${port}`)
})