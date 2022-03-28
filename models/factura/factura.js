import mongoose from 'mongoose';
const { Schema, model } = mongoose

import { UsuarioMODEL } from '../usuario/usuario.js';

const FacturaSchema = new Schema({
    descuento:{
        type: Number,
        required: false,
    },
    fechaPedido:{
        type: Date,
        required: true,
    },
    subtotal:{
        type: Number,
        required: true, 
    },  
    IVA:{
        type: Number,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    },
    cliente:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:UsuarioMODEL,
    },      
});

const FacturaMODEL = model('factura', FacturaSchema )

export { FacturaMODEL };