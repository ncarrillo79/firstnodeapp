const express = require('express')
const app = express()
const path = require('path')

//setting
app.set('port' , 3000)
app.set('views' , path.join(__dirname, 'views'))
app.engine('html' , require('ejs').renderFile)
app.set('view engine' , 'ejs')


//middlewares

//routes
app.use(require('./routes/index'))

//statics files
app.use(express.static(path.join(__dirname, 'public')))

//listening server
app.listen(app.get('port'),()=>{
    console.log('escuchando porta',  app.get('port'))
})

