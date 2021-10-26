const e = require("express");
const mongoose = require("mongoose");
const { conn, movieSchema } = require('../public/db')
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
var _jade = require('jade');

const purchaseController = {}

const movies = conn.model("Movie", movieSchema);

function sendEmail(emailHTML, toEmail) {
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

    let mailOptions = {
        from: '"Nodemailer Contact" <cinemaDummyBeast@outlook.com>',
        to: toEmail,
        subject: 'Factura. ' + data.title,
        text: 'Factura',
        html: emailHTML
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return false;
        }
        /*
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        */
    })
}

function createReceipt(data) {
    var template = process.cwd() + '/views/email.jade';

    try {
        let file = fs.readFileSync(template, 'utf-8')
        //compile jade template into function
        var compiledTmpl = _jade.compile(file, { filename: template });
        // set context to be used in template
        var context = { title: data.title, seats: data.seats, name: data.name, total: data.total };
        // get html back as a string with the context applied;
        htmlReceipt = compiledTmpl(context);
        return htmlReceipt
    } catch (error) {
        console.log(error)
        return null
    }
}


/**
 * Retorna la factura en caso de una compra exitosa, retorna error en caso contrario
 *
 * @param {array} seats arreglo con los numeros de asientos.
 * @param {string} title nombre de la pelicula.
 * @param {string} email correo del cliente.
 * @param {string} name Nombre del cliente.
 * @param {number} total precio total.
 */
purchaseController.buySeats = async (req, res) => {
    if (req.body.seats == null || req.body.title == null || req.body.email == null 
        || req.body.name == null || req.body.total == null) { return res.status(500).send("Missing parameters") }
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
        return res.status(500).send("Pelicula no encontrada");
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
        return res.status(500).send("Error actualizando asientos");
    }
    //console.log(unmodifiedSeats)
    //console.log(seats)
    
    // Se genera factura
    data = req.body
    data.seats = seats.map((elem) => { return elem + 1 })
    let htmlReceipt = createReceipt(data)

    // Se envia el correo
    if (htmlReceipt) {
        sendEmail(htmlReceipt, req.body.email);
    } else {
        return res.send("Compra exitosa. Error creando factura")
    }

    
    return res.send("Compra exitosa")
}

module.exports = purchaseController