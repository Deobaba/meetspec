const express = require('express')
const{createUser,updateUser,getUser,getUsers,deleteUser} = require('../controller/User')
const router = express.Router()


router.route('/')
    .post(createUser)
    .get(getUsers)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)



module.exports = router