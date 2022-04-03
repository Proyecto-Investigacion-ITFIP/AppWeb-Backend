import { UsuarioMODEL } from "../../models/usuario/usuario.js";
import bcrypt from 'bcrypt';
import  { generarToken }  from '../../utils/tokenUtils.js';
 
const resolversAutenticacion = {
    Mutation:{
        registro: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.contrasena, salt)
            const registroCreado = await UsuarioMODEL.create({
                nombre: args.nombre,
                apellido: args.apellido,    
                email: args.email,
                identificacion: args.identificacion,
                telefono: args.telefono,
                contrasena: hashedPassword,
                rol: args.rol,
            });
            console.log('Usuario Creado', registroCreado);
            return { 
                token: generarToken({
                    _id: registroCreado._id,
                    nombre: registroCreado.nombre,
                    apellido: registroCreado.apellido,
                    email: registroCreado.email,
                    identificacion: registroCreado.identificacion,
                    telefono: registroCreado.telefono,
                    rol: registroCreado.rol,
                }),
            };
        },
    },
};  

export { resolversAutenticacion };