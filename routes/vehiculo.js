const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {vehiculoGet, vehiculoPost, vehiculoPut, vehiculoDelete} = require('../controllers/vehiculo')

route.get('/', vehiculoGet) //Listar Datos

route.post('/', vehiculoPost) //Insertar Datos

route.put('/', vehiculoPut) //Modificar Datos

route.delete('/', vehiculoDelete) //Eliminar Datos

module.exports = route