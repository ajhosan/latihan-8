const express = require('express')
const app = express()
const PORT = 3000

const expressLayout = require('express-ejs-layouts')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayout)

app.set('layout', 'layouts/default')


const router = require('./router')
app.use(router)

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

const setDefault = (req,res,next)=>{
    res.locals.contentName = "Default"

    next()
}

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})