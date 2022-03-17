import mongoose from 'mongoose';
const { Schema, model } = mongoose

const UsuarioSchema = new Schema({
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
    rol:{
        type: String,
        required: true,
        enum: ['USUARIO-CAJA', 'CLIENTE', 'ADMINISTRADOR']
    },
    estado:{
        type: String,
        emum: ['PENDIENTE', 'AUTORIZADO', 'NO-AUTORIZADO'],
        default: 'PENDIENTE',
    },
});

const UsuarioMODEL = model('usuario', UsuarioSchema)

export { UsuarioMODEL };