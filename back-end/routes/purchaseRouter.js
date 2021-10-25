var router = require("express").Router();

const {
    buySeats
} = require("../controllers/purchaseController");

/* GET home page. */
router.post('/buy', buySeats);

module.exports = router;
