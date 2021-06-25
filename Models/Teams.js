const mongoose = require("mongoose");
let Teamschema = mongoose.Schema({
    city: String,
    date: String,
    teamA: String,
    teamB: String,
});

let Team = mongoose.model("Team", Teamschema);
module.exports = Team;