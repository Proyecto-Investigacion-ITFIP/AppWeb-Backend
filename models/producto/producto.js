import mongoose from 'mongoose';
const { Schema, model } = mongoose

const ProductoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true    
    },
    descripcion:{
        type: String,   
        required: true,
    },
    marca:{
        type: String,
        required: true,
    },
    modelo:{
        type: String,
        required: true, 
    },  
    precioUnidad:{
        type: Number,
        required: true,
    },
    cantidadTotalExistente:{
        type: Number,
        required: true,
    },
    estadoProducto:{
        type: String,
        emum: ['DISPONIBLE', 'AGOTADO'],
        default: 'DISPONIBLE',
    },
});

const ProductoMODEL = model('producto', ProductoSchema)

export { ProductoMODEL };