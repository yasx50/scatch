const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/scatch")
.then(()=>{
    console.log('database connected successfully');
    

}).catch((err)=>{
    console.log(err);
    

})

module.exports = mongoose.connection;