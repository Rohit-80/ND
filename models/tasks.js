const mongoose  = require("mongoose");

const TaskSchema =
   new mongoose
   .Schema({ 
       name:{
           type : String,
           required:[true,'must provide name'],
           trim:true,
           maxlength:[20,'name cant be more than 20 character`s']
       }, 
       completed:{
           type : Boolean,
           default : false
       }
    });

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;