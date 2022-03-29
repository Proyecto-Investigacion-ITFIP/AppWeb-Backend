import mongoose from 'mongoose';
const { Schema, model } = mongoose
import { FacturaMODEL } from '../factura/factura.js';
import { ProductoMODEL } from '../producto/producto.js';

const DetalleSchema = new Schema({
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
        ref: FacturaMODEL,
    },
    producto:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProductoMODEL
    },

});

const DetalleMODEL = model('detalle', DetalleSchema)

export { DetalleMODEL };