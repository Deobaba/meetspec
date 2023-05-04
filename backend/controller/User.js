const User = require('../models/user')


exports.createUser = async(req,res,next) =>{

const user = await User.create(req.body);
console.log(user)

res.status(200).json({
    success:true,
    data:user
})
    

}

// exports.createUser = async(req,res,next) =>{

//     res.send('it got here')
        
//  }