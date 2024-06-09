const router = require("express").Router();
const { getAll, getOne, getById, create, updateById, deleteById } = require("../../controllers/user.controllers")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()

async function createToken(user) {
  const tokenData = { email: user.email }
  // console.log(tokenData)
  const token = await jwt.sign(tokenData, process.env.TOKEN_ENCRYPT_KEY)
  // console.log(token)
  return token
}

router.get("/", async (req, res) => {
  try {
    const user = await getAll()
    res.status(200).json({ status: 'success', results: user })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})




router.post("/", async (req, res) => {
  try {
    // console.log(req.body)
    const user = await create(req.body)
    // console.log(user)
    const token = await createToken(user)
    // console.log(token)
    res
      .status(200)
      .cookie('auth-cookie', token, {
        maxAge: 86400 * 1000,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production'
      })
      .json({ status: 'success', results: user })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})


router.post("/login", async (req, res) => {
  let user;
  try {
    user = await getOne({ email: req.body.email })

    // console.log('user password')
    const verify = await bcrypt.compare(req.body.password, user.password)
    // console.log(verify)
    if (!verify) {
      return res.status(404).json({ status: 'error', message: 'Could not authenticate user' })
    }

    const token = await createToken(user)

    res
      .status(200)
      .cookie('auth-cookie', token, {
        maxAge: 86400000,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production'
      })
      .json({ status: 'success', results: user })
  } catch (err) {
    res.status(401).json({ status: 'error', message: 'Could not authenticate user' })
  }
})


router.get("/verify", async (req, res) => {
  console.log('are we there yet')
  const cookie = req.cookies['auth-cookie']
  console.log(cookie)
  if (!cookie) {
    return res.status(500).json({ status: 'error', message: 'Could not authenticate user' })
  }

  // Conditional lookup of the user
  const decryptedCookie = jwt.verify(cookie, process.env.TOKEN_ENCRYPT_KEY)
// console.log(decryptedCookie)
  // Decrypted cookie will be an object with user's email 
  const user = await getOne({ email: decryptedCookie.email })
// console.log(user)
  if (!user) {
    return res.status(500).json({ status: 'error', message: 'Could not authenticate user' })
  }

  res.status(200).json({ status: 'success', results: user })
})

router.get("/:id", async (req, res) => {
  try {
    const user = await getById(req.params.id)
    res.status(200).json({ status: 'success', results: user })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    let user = await updateById(req.params.id, req.body)
    user = await user.save()
    res.status(200).json({ status: 'success', results: user })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const user = await deleteById(req.params.id)
    res.status(200).json({ status: 'success', results: user })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})

module.exports = router