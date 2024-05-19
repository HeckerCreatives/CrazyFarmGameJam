const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        amount: {
            type: Number
        },
    },
    {
        timestamps: true
    }
)

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
module.exports = Leaderboard