const router = require("express").Router();
const { getAllUsers, getOneUser, createUser, loginUser, verifyUser, updateUserById, deleteUserById } = require("../../controllers/user.controllers")

router.route('/').get(getAllUsers).post(createUser)

router.route('/:userId').get(getOneUser).put(updateUserById).delete(deleteUserById)

router.route('/login').post(loginUser)

router.route('/verify').post(verifyUser)

module.exports = router