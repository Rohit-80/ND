
const Task = require('../models/tasks')



const getAlltask = async (req,res)=>{
    try{ 
        const tasks = await Task.find({});
        res.status(201).json({tasks});
    }catch(e){
        res.status(500).json({msg:e});
    }
}


const getTask = async (req,res)=>{
    try{

        const TaskID = req.params.id;
        const task = await Task.findOne({_id:TaskID});

        if(!task){
            return res.status(500).json({msg : "not fouund"});
        }
        res.status(201).json({task});

    }catch(e){
        return res.status(500).json({msg : e});
    }
    
}

const CreateTask = async (req,res)=>{
     
    try{
        const task = await Task.create(req.body);    
        res.status(201).json({task});
    }catch(e){
       res.status(500).json({msg:e})
    }
    
}


const UpdateTask = async (req,res)=>{
    try {
        const TaskId = req.params.id;
        const task = await Task.findOneAndUpdate({_id:TaskId},req.body,{
            new : true ,
            runValidators : true

        })
        if(!task){
            return res.status(404).json({msg:"NO found"})
        }

        res.status(201).json({task});
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
    // res.send('all items from controller');
}



const deleteTask = async (req,res)=>{  try{

    const TaskID = req.params.id;
    const task = await Task.findOneAndDelete({_id:TaskID});

    if(!task){
        return res.status(500).json({msg : "not fouund"});
    }
    res.status(201).json({task});

}catch(e){
    return res.status(500).json({msg : e});
}
    
}

module.exports= { getAlltask, getTask,CreateTask,UpdateTask,deleteTask}