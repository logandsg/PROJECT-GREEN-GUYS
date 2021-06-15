const userRouter = require('express').Router()

const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  // updateProfile,
  deleteUser
} = require('../controllers/users.controller')

userRouter
  .post('/', createUser)
  .get('/', getAllUsers)
  .get('/:userId', getUser)
  .put('/:userId', updateUser)
  // .put('/me', updateProfile)
  .delete('/:userId', deleteUser)

exports.userRouter = userRouter
