const express = require('express');
const app = express();
const path = require('path');
const cookieparser = require('cookie-parser');
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs")


app.get('/',(req,res)=>{
    res.send('scatch')
})


app.listen(port,()=>{
    console.log('scatch app is listing at port',port);
    
})