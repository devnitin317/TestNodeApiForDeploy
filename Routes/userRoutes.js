const express = require('express')
const {getAllUsers,create,update, deleteUser} = require('../Controller/userController')

const route = express.Router();

route.get('/getAllUsers',getAllUsers)
0.
route.post('/create',create)
route.put('/update/:id',update)
route.delete('/delete/:id',deleteUser)




module.exports =  route;