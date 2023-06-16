const error = (req,res) =>{
    res.status(404).json({msg:'NOT FOUND'})
}

module.exports = error;