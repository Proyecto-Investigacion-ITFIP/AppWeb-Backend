import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    producto:{
        type: String,
        required: true,
        unique: true    
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
        emum: ['Disponible', 'Agotado'],
        default: 'Disponible',
    },
});

const productoMODEL = model('producto', UserSchema)

export { productoMODEL };