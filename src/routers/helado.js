const express = require("express"); //libreria
const router = express.Router(); //manejador de las rutas de express
const heladoSchema = require("../models/helado"); //entra a la clase helados en modelos

//nuevo helado:
router.post("/helados", (req, res) => {
    const helado = heladoSchema(req.body);//crea nuevo helado usando el req que es todo los atributos del objeto helado
    helado.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }));//guarda el helado
});

module.exports = router;