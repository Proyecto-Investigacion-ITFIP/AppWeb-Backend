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
            // console.log('Usuario Creado', registroCreado);
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

        login: async (parent, args) => {
            const usuarioEncontrado = await UsuarioMODEL.findOne({ email: args.email });
            if ( await bcrypt.compare(args.contrasena, usuarioEncontrado.contrasena) ) {
                // console.log(args, usuarioEncontrado, comparacion)
                return { 
                    token: generarToken({
                        _id: usuarioEncontrado._id,
                        nombre: usuarioEncontrado.nombre,
                        apellido: usuarioEncontrado.apellido,
                        email: usuarioEncontrado.email,
                        identificacion: usuarioEncontrado.identificacion,
                        telefono: usuarioEncontrado.telefono,
                        rol: usuarioEncontrado.rol,
                    }),
                };
            }
        },

        validarToken : async (parent, args, context) => {
            console.log(context)
            // validar que el contexto tenga la info del usr
            // si. refrescar token   //no devolver null redirigir login
        }
    }
};  

export { resolversAutenticacion };