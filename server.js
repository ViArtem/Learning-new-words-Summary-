const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const hbs = require('hbs')
const todoRoutes = require('./routes/engl')
const Word = require("./models/Word")
const Answer = require("./models/Answer")
var  bodyParser  =  require ( 'body-parser' )
const PORT = process.env.PORT || 3000

const app = express()
// const hbs = exphbs.create({
//     defaultLayout: 'main',
//     extname: 'hbs'
// })
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

// app.use(function(req, res, next) {
//     console.log(typeof req.next);

//     next();
// });
// app.use(express.bodyParser());


async function startserv(){
    try {
        await mongoose.connect("mongodb+srv://vitenkoart:1q2w3e4r@cluster0.qd7i7x3.mongodb.net/project0?retryWrites=true&w=majority",{
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