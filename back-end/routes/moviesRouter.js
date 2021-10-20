var router = require("express").Router();

const {
  getAllMovies
} = require("../controllers/moviesController");

/* GET home page. */
router.get('/movies', getAllMovies);

module.exports = router;
