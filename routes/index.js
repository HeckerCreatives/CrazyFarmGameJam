const routers = app => {
    console.log("Routers are all available");

    app.use("/leaderboard", require("./Leaderboard"))
}

module.exports = routers