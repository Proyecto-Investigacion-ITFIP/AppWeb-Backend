import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
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
        validate: {
            validator: (correo) => {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
            },
            message: 'El formato del correo electrónico está malo.',
        },
    },
    Identificacion:{
        type: String,
        required: true,
        unique: true
    },
    rol:{
        type: String,
        required: true,
        enum: ['UsuarioCaja', 'Cliente', 'Administrador']
    },
    estado:{
        type: String,
        emum: ['Pendiente', 'Autorizado', 'No Autorizado'],
        default: 'Pendiente',
    },
});

const UserMODEL = model('User', UserSchema)

export { UserMODEL };