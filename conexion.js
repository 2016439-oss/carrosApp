const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO;

//const uri = 'mongodb+srv://Val:97801941_Vb@cluster0.dennbyw.mongodb.net/?appName=Cluster0';

async function conectarBD() {
try {
await mongoose.connect(uri);
console.log('Conectado correctamente a MongoDB Atlas con Mongoose');
} catch (error) {
console.log('Error conectando con Mongoose:', error.message);
}
}

module.exports = conectarBD;