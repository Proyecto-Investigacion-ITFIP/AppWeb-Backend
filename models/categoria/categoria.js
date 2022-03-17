import { Schema, model } from 'mongoose';

const categoriaSchema = new Schema({

    descripcion:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },

});

const categoraMODEL = model('categoria', categoriaSchema)

export { categoraMODEL };