import { Schema, model } from 'mongoose';
import { UserMODEL } from './user';

const UserSchema = new Schema({
    descuento:{
        type: Number,
        required: false,
    
    },
    FechaPedido:{
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
        ref:UserMODEL,
    },      
});

const facturaMODEL = model('factura', UserSchema)

export { facturaMODEL };