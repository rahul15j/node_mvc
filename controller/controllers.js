const  Crud  = require("../models/crud");



const createApp = async(req, res) => {
    const crud = new Crud({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });
  
    save = await crud.save();
    res.json(save)
    
  };
  
  const getApp = async(req, res) => {
    const getAll = await Crud.find();
    res.send(getAll)
    
  };
  

  const updateApp = async(req, res) => {
    const crud = await Crud.findByIdAndUpdate(
        req.params.crudID,
        {
          title:req.body.title,
          description:req.body.description,
          completed:req.body.completed,
        },
        { new: true}
    )

     res.send(crud);
}
  
  
    const deleteApp = (req, res)=>{
    const crud =  Crud.findByIdAndDelete(req.params.crudID).then(crud =>{
        if(crud) {
            return res.status(200).json({success: true, message: 'the id related data is deleted'})
        } else {
            return res.status(404).json({success: false , message: "data not found"})
        }
    })
  }



  module.exports = {
    createApp,
    getApp,
    updateApp,
    deleteApp,
  };
  