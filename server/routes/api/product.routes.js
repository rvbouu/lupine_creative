const router = require("express").Router();
const { getAll, getById, create, updateById, deleteById } = require("../../controllers/product.controllers")

router.get("/", async (req, res) => {
  try {
    const payload = await getAll()
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


router.get("/:id", async (req, res) => {
  try {
    const payload = await getById(req.params.id)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


router.post("/", async (req, res) => {
  try {
    const payload = await create(req.body)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


router.put("/:id", async (req, res) => {
  try {
    const payload = await updateById(req.params.id, req.body)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteById(req.params.id)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


module.exports = router