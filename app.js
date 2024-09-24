const express = require('express');
const app = express();
const path = require('path');
const cookieparser = require('cookie-parser');
const port = 3000;
require('dotenv').config() 


//connecting to database

const db = require('./config/mongoose-connection')

//setting the view engine

app.set("view engine","ejs")

//using the required middlewares for parsing

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(express.static(path.join(__dirname,"public")))

//routes

const ownerRouter =require('./routes/ownerRouter')
const usersRouter =require('./routes/usersRouter')
const productsRouter =require('./routes/productsRouter')
app.use('/owners',ownerRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)




//handling the request main_program

app.get('/',(req,res)=>{
    res.send('scatch')
})


app.listen(port,()=>{
    console.log('scatch app is listing at port',port);
    
})