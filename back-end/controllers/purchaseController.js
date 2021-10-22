const e = require("express");
const mongoose = require("mongoose");
const { conn, movieSchema } = require('../public/db')
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const purchaseController = {}

const movies = conn.model("Movie", movieSchema);


function sendEmail(data) {
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secureConnection: false,
        auth: {
            user: 'cinemaDummyBeast@outlook.com',
            pass: 'cinema01DummyBeast02'
        },
        tls: {
            ciphers: 'SSLv3'
        }
    })

    const receiptHTML = fs.readFileSync(path.resolve(__dirname, "../public/receipt.html"));

    let mailOptions = {
        from: '"Nodemailer Contact" <cinemaDummyBeast@outlook.com>',
        to: 'esteban13torres@gmail.com',
        subject: 'NodeMailere Test',
        text: 'Hello Worl',
        html: receiptHTML
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

        //Si no falló que edevuelva a la página principal
    })
}

/**
 * Retorna la factura en caso de una compra exitosa, retorna error en caso contrario
 *
 * @param {array} seats arreglo con los numeros de asientos.
 * @param {string} title nombre de la pelicula.
 */
purchaseController.buySeats = async (req, res) => {
    if (req.body.seats == null || req.body.title == null) { return res.status(500).send("Missing parameters") }
    let seats = req.body.seats;
    let movieName = req.body.title
    let movieInfo;
    let unmodifiedSeats;

    // Se obtiene la pelicula
    try {
        movieInfo = await movies.findOne({ title: movieName }, "-_id")
        if (movieInfo == null) {
            return res.status(500).send("Pelicula no encontrada");
        }
        unmodifiedSeats = [...movieInfo.seats]
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

    try {
        var updateMovie = await movies.findOneAndUpdate({ title: movieName, seats: unmodifiedSeats }, { $set: { seats: movieInfo.seats } }, { new: true });
        if (updateMovie == null) {
            return res.status(500).send("Error actualizando asientos");
        }
    } catch (err) {
        return res.status(500).send(err);
    }

    // Se genera factura

    // Se envia el correo

    sendEmail("Hola 123");

    return res.json(updateMovie)
}

module.exports = purchaseController