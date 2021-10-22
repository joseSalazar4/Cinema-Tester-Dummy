const mongoose = require("mongoose");
const {conn, movieSchema} = require('../public/db')

const movieController = {};

const movies = conn.model("Movie", movieSchema);

movieController.getAllMovies = async (req, res) => {
    try {
        allMovies = await movies.find({}, "-_id")
    } catch (error) {
        return res.status(500).send(error);
    }
    return res.json(allMovies)
}

module.exports = movieController;