const mongoose = require("mongoose"); //se importa el componenete mongoose

const heladoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    marca: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Helado", heladoSchema);//exportar el modelo helado
