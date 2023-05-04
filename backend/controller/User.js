const User = require('../models/user')
const asyncHandler = require('../middleware/async')


exports.createUser = asyncHandler( async(req,res,next) =>{

const user = await User.create(req.body);
console.log(user)

res.status(200).json({
    success:true,
    data:user
})
    

})

exports.updateUser = asyncHandler(async (req,res,next) =>{
    const user =await User.findByIdAndUpdate(req.params.id,req.body, {
        new:true,
        runValidators:true
    })

    res.status(200).json({
        success:true,
        data:user
    })
})

exports.getUser =asyncHandler( async(req,res,next) =>{
    const user = await User.findById(req.params.id)

    res.status(200).json({
        success:true,
        data:user
    })
})

exports.getUsers =asyncHandler( async (req,res,next) =>{
    const user = await User.find()

    res.status(200).json({
        success:true,
        data:user
    })

})

exports.deleteUser = asyncHandler(async(req,res,next)=>{
    const user = await User.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success:true,
        data:user
    })

})