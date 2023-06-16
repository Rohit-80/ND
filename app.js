const connectBD = require('./db/connect') 
const express = require('express')
const app = express();
const routers = require('./Route/task');
require('dotenv').config()
const error = require('./error')
// console.log(process.env.MONGO_URL)
const port = process.env.PORT || 3000
app.use(express.static('./public'))
app.use(express.json());


// app.get('/',(req,res)=>{
//     res.send('hello world');
// });

app.use('/api/v1/tasks',routers);
app.use(error);
const start = async ()=>{
    try{
      await connectBD(process.env.MONGO_URL)
      app.listen(3000,console.log(`Server is listening on port ${port}...`))
    }catch(err){
       console.log(err)
    }
}

start()


// console.log('Task manager')