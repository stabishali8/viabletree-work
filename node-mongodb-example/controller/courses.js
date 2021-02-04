const express = require('express');
const mongoose =require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model("Course")

router.get("/list",(req,res)=>{

    // let course = new CourseModel();
    // course.courseName = "Node js";
    // course.courseId = "2";
    // course.save();

    CourseModel.find((err,docs)=>{
        if(!err){
            console.log(docs)
            res.render("list",{data:docs})
        }else{
            res.send("Error");
        }
    })
})

module.exports = router;