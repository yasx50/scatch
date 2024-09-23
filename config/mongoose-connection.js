const mongoose = require('mongoose');
const config = require('config')
const dbgr = require('debug')("development:mongoose");


mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(()=>{
    dbgr('database connected successfully');
    console.log('dataBase connected');
    
   
    
    

})
.catch((err)=>{
    dbgr(err);
    

})

module.exports = mongoose.connection;