const mongoose = require("mongoose");

try {
    var conn = mongoose.createConnection(process.env.MONGO_URL, (err, results) => {
        if (err) {
            console.log("Error conectando a MongoDB: ", err)
        } else {
            return results
        }
    })
} catch (err) {
    console.log("Error conectando a MongoDB: ", err)
}

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    url: String,
    seats: Array
});

module.exports = {conn, movieSchema};