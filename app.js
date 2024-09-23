const express = require('express');
const app = express();
const path = require('path');
const cookieparser = require('cookie-parser');
const port = 3000;

const db = require('./config/mongoose-connection')


//using the required middlewares for parsing

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(express.static(path.join(__dirname,"public")))


//setting the view engine

app.set("view engine","ejs")

//routes

const ownerRouter =require('./routes/ownerRouter')
const usersRouter =require('./routes/usersRouter')
const productsRouter =require('./routes/productsRouter')
app.use('/owners',ownerRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)


app.get('/',(req,res)=>{
    res.send('scatch')
})


app.listen(port,()=>{
    console.log('scatch app is listing at port',port);
    
})