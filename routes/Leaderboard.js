const router = require("express").Router()
const { getleaderboard, saveleaderboard } = require("../controllers/Leaderboard")

router
    .get("/getleaderboard", getleaderboard)
    .post("/saveleaderboard", saveleaderboard)

module.exports = router;