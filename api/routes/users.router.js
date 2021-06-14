const userRouter = require('express').Router()

const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controller')

userRouter
  .post('/', createUser)
  .get('/', getAllUsers)
  .get('/:userId', getUser)
  .put('/:userId', updateUser)
  .delete('/:userId', deleteUser)
  .delete('/me', deleteUser)

exports.userRouter = userRouter