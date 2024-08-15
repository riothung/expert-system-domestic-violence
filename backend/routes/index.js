const router = require("express").Router()
const userRouter = require("./auth.js")

router.use(userRouter)

module.exports = router
