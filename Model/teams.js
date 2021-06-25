const mongoose = require("mongoose");
let teamsschema = mongoose.Schema({
    city: String,
    date: String,
    team_A: String,
    team_B: String,

});

let Team = mongoose.model("team", teamsschema);
module.exports = Team;