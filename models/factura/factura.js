import mongoose from 'mongoose';
import { UsuarioMODEL } from '../usuario/usuario.js ';

const { Schema, model } = mongoose

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
    iva:{
        type: Number,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    },
    cliente: {
        type: Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: UsuarioMODEL,
        required: true,
    },
=======
        required:true,
        ref:UsuarioMODEL,
    },      
>>>>>>> release
});

const FacturaMODEL = model('factura', FacturaSchema )

export { FacturaMODEL };