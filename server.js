const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const hbs = require('hbs')
const todoRoutes = require('./routes/engl')
const Word = require("./models/Word")
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

app.use(todoRoutes)
async function startserv(){
    try {
        await mongoose.connect("mongodb+srv://vitenkoart:1q2w3e4r@cluster0.qd7i7x3.mongodb.net/?retryWrites=true&w=majority",{
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