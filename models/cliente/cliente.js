import mongoose from 'mongoose';
const { Schema, model } = mongoose

const ClienteSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true, 
        unique: true,
        validate: {
            validator: (correo) => {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
            },
            message: 'El formato del correo electrónico está malo.',
        },
    },
    identificacion:{
        type: String,
        required: true,
        unique: true
    },
    telefono:{
        type: String,
        required: true,
    },
    departamento:{
        type: String,
        required: true,
    },
    ciudad:{
        type: String,
        required: true,    
    },
    
});

const ClienteMODEL = model('cliente', ClienteSchema)

export { ClienteMODEL  };    