const e = require("express");
const mongoose = require("mongoose");
const { conn, movieSchema } = require('../public/db')

const purchaseController = {}

const movies = conn.model("Movie", movieSchema);

/**
 * Retorna la factura en caso de una compra exitosa, retorna error en caso contrario
 *
 * @param {array} seats arreglo con los numeros de asientos.
 * @param {string} title nombre de la pelicula.
 */
purchaseController.buySeats = async (req, res) => {
    let seats = req.body.seats;
    let movieName = req.body.title
    let movieInfo;

    // Se obtiene la pelicula
    try {
        movieInfo = await movies.findOne({ title: movieName }, "-_id")
        if (movieInfo == null) {
            return res.status(500).send("Pelicula no encontrada");
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err);
    }
    // Se verifican los asientos
    for (var i = 0; i < seats.length; i++) {
        index = seats[i]
        if (index >= movieInfo.seats.length) {
            return res.status(500).send("Asiento #" + (index + 1) + " no existe");
        }
        if (movieInfo.seats[index] == 0) {
            movieInfo.seats[index] = 1
        }
        else {
            return res.status(500).send("Uno o mas de los asientos seleccionados se encuentran ocupados");
        }
    }

    await movies.updateOne({ title: movieName }, {
        $set: {
            "seats": movieInfo.seats
        }
    })
    
    return res.json(movieInfo)
    
}

module.exports = purchaseController