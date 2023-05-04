const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        maxlength: [50, 'Name can not be more than 50 characters'],
          type: String,
         required: [true, 'Please add a name'],
         unique: true,
         trim: true,
    },
    email: {
        type: String,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please add a valid email'
        ]
    },
    gender:{
        type: String,
        required:[true, 'select a gender'],
        enum:['male','female']
    },
    DateOfBirth :{
        type:String,
        required:[true,'enter date of birth']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },

})

module.exports = mongoose.model('User',userSchema)