const express = require('express');
const app = express();
const path = require('path');
const cookieparser = require('cookie-parser');
const expressSession = require('express-session')
const flash = require('connect-flash')
require('dotenv').config() 
const port = 3000;


//connecting to database

const db = require('./config/mongoose-connection')

//setting the view engine

app.set("view engine","ejs")

//using the required middlewares for parsing

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(express.static(path.join(__dirname,"public")))

// flash and sessions

app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET
    })
)
app.use(flash())

app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
  });

//routes

const ownerRouter =require('./routes/ownerRouter')
const usersRouter =require('./routes/usersRouter')
const productsRouter =require('./routes/productsRouter')
const indexRouter =require('./routes/index')
app.use('/',indexRouter)
app.use('/owners',ownerRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)




//handling the request main_program

// app.get('/',(req,res)=>{
//     res.send('scatch')
// })


app.listen(port,()=>{
    console.log('scatch app is listing at port',port);
    
})