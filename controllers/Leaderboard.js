const Leaderboard = require("../models/Leaderboard")

exports.getleaderboard = async (req, res) => {
    const {limit} = req.query

    const leaderboardData = await Leaderboard.find()
    .sort({amount: - 1})
    .limit(limit)
    .then(data => data)
    .catch(err => res.status(400).json({ message: "bad-request", data: err.message }))

    const data = {}

    index = 0;
    leaderboardData.forEach(lbdata => {
        data[index] = {
            username: lbdata.name,
            score: lbdata.amount
        }

        index++
    })

    return res.json({message: "success", data: data})
}

exports.saveleaderboard = async (req, res) => {
    const {username, score} = req.body

    await Leaderboard.create({name: username, amount: score})
    .catch(err => res.status(400).json({ message: "bad-request", data: err.message }))

    return res.json({message: "success"})
}