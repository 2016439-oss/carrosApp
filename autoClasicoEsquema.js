const { Schema, model } = require('mongoose');
 
const AutoClasicoSchema = new Schema({
  marca: String,
  modelo: String,
  anio: Number,
  paisOrigen: String,
  tipoCarroceria: String,
  estadoConservacion: String,
  motor: String,
  color: String,
  valorEstimado: Number,
  imagenUrl: String
  
});
const AutoClasico = model('AutoClasico', AutoClasicoSchema);
 
module.exports = AutoClasico;