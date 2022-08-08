const bodyParser= require("body-parser");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncerrors");
const User = require("../models/userModels");

//Register a user
exports.registerUser = catchAsyncErrors(async (req,res,next)=>{
    const {name,email,password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
          public_id: "This is a sample public id",
          url: "profilepicUrl",
        },
      });
    res.status(201).json({
        success:true,
        user
    });
});