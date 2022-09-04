const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const hbs = require('hbs')
const todoRoutes = require('./routes/engl')
const Word = require("./models/Word")
var  bodyParser  =  require ( 'body-parser' )
const PORT = process.env.PORT || 3000

const app = express()

app.engine("hbs", exphbs.engine(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "main",
        extname: "hbs"
    }
))
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join( __dirname,"public")))
app.use(express.urlencoded({extended: true}))
app.use(todoRoutes)




async function startserv(){
    try {
        await mongoose.connect("mongodb+srv://vita:6789o@cluster0.6cgiyah.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
       
        app.listen(PORT, ()=>{
            console.log(`Server has been started on port: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
        
    }
}


startserv()