import { Schema, model } from 'mongoose';
import { facturaMODEL } from './factura';
import { productoMODEL } from './producto';

const UserSchema = new Schema({
    cantidad:{
        type: Number,
        required: true,
    },
    totalProductos:{
        type: Number,
        required: true,
    },
    factura:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: facturaMODEL,
    },
    producto:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: productoMODEL
    },

});

const detalleMODEL = model('detalle', UserSchema)

export { detalleMODEL };