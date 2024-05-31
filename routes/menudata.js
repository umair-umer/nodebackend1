const express =require("express");
const router=express.Router();
const Menue = require('../menuitemschema')

router.post("/",async(req,res)=>{
    try {
        const data=req.body;
        const newitem= new Menue(data);
        const response =await newitem.save();
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server erro" });
    }
})

router.get("/",async(req,res)=>{
    try {
        const data= await Menue.find();
        console.log("mnenu");
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: "internal server erro" });
    }
})

router.get("/:disType", async(req,res)=>{
    try {
        const disType=req.params.disType;
        const response = await Menue.find({dishetype:disType});
        res.status(200).json(response);
    } catch(error) {
        res.status(500).json({ error: "internal server erro" });
    }
})

router.put("/:dishId",async(req,res)=>{
   try {
    const dishid =req.params.dishId;
    const updatedish=req.body;
    const response= await Menue.findByIdAndUpdate(dishid,updatedish,{
        new:true,
        runValidators:true
    });
    if (!response) {
        return res.status(404).json({ error: "user not found" });
      }
      console.log(response);
      res.status(200).json(response)
   } catch (error) {
    console.log(error,"error");
    res.status(500).json({messsage:"internal erro server"})
   }

})
router.delete("/:id",async(req,res)=>{
    try {
        const productId=req.params.id;
        const response= await Menue.findByIdAndDelete(productId)
        if (!response) {
            return res.status(404).json({ error: "user not found" });
          }
          console.log("Data deleted");
          res.status(200).status({messsage:"Data deleted"})
    } catch (error) {
        console.log(error);
         res.status(500).json({messsage:"internal server ever"})
    }
})


module.exports =router;