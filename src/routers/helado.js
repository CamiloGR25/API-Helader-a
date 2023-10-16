const express = require("express"); //libreria
const router = express.Router(); //manejador de las rutas de express
const heladoSchema = require("../models/helado"); //entra a la clase helados en modelos

//nuevo helado:
router.post("/helados", (req, res) => {
    const helado = heladoSchema(req.body);//crea nuevo helado usando el req que es todo los atributos del objeto helado
    helado.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }));//guarda el helado
});

//consultar helado:
router.get("/helados", (req, res) => {
    heladoSchema.find()//traer los datos para mostrarlos
        .then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//consultar helado con id:
router.get("/helados/:id", (req, res) => {
    const { id } = req.params;
    heladoSchema.findById(id)
        .then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//modificar helado:
router.put("/helados/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, sabor, material, tipo, costo, marca } = req.body;
    heladoSchema.updateOne({ _id: id }, { $set: { nombre, sabor, material, tipo, costo, marca } })
        .then((data) => res.json(data)).catch((error) => res.json({ message: error }))
});

//eliminar helado:
router.delete("/helados/:id", (req, res) => {
    const { id } = req.params;
    heladoSchema.findByIdAndDelete(id)
        .then((data) => res.json(data)).catch((error) => res.json({ message: error }))
})

module.exports = router;