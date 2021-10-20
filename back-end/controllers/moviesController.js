const mongoose = require("mongoose");

const movieController = {};

const conn = mongoose.createConnection("mongodb+srv://admin:admin@aseguramientocinemadumm.8u8xk.mongodb.net/CinemaDummy?retryWrites=true&w=majority")

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    url: String
});

const movies = conn.model("Movie", movieSchema);

movieController.getAllMovies = async (req, res) => {
    const all = await movies.find({});
    //console.log("all: ", all)
    return res.json(all)
}

module.exports = movieController;