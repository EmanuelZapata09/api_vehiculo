const {response} = require('express')

//Importación de los modelos
const Vehiculo = require('../models/vehiculo')

//Método GET de la API
const vehiculoGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los usuarios
    const vehiculos = await Vehiculo.find()

    res.json({  //Respuesta en JSON
        vehiculos
    })   
}

//Método POST de la api
const vehiculoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const vehiculo = new Vehiculo(body) //Instanciando el objeto
        await vehiculo.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modifcación
const vehiculoPut = async(req, res = response) => {

    const {placa,referencia,modelo,chasis,color} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Vehiculo.findOneAndUpdate({placa:placa}, 
            {referencia:referencia,modelo:modelo,chasis:chasis,color:color})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const vehiculoDelete = async(req, res) => {

    const {_id} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const vehiculo = await Vehiculo.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    vehiculoGet,
    vehiculoPost,
    vehiculoPut,
    vehiculoDelete
}