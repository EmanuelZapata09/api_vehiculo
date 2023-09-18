const {Schema, model} = require('mongoose')

const VehiculoSchema = Schema({
    placa: {
        type: String,
        unique: true,
        required: [true, 'La placa es obligatoria']
    },
    referencia: {
        type: String,
        unique: true,
        required: [true, 'La referencia es obligatoria']
    },
    modelo: {
        type: Number,
        unique: true,
        required: [true, 'El modelo es obligatorio']
    },
    chasis: {
        type: String,
        unique: true,
        required: [true, 'El chasis es obligatorio']
    },
    color: {
        type: String,
        unique: true,
        required: [true, 'El color es obligatorio']
    }
})

//Exportar la función UsuarioSchema
module.exports = model('Vehiculo',VehiculoSchema)
/*
{
    "documento": "1023625297",
    "nombre": "Emanuel Zapata",
    "direccion": "Calle 77C #91-44",
    "telefono": "3054070574",
    "correo": "emanuelzpx@gmail.com",
    "estado": true
    } 
    */