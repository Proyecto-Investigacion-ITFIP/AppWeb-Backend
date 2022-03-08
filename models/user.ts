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
    },
    Identificacion:{
        type: String,
        required: true,
        unique: true
    },
});

const UserMODEL = model('User', UserSchema)

export default  UserMODEL;