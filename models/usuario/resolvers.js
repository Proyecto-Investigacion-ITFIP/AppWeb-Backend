import { UsuarioMODEL } from './usuario.js';

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args, context) => {
      if ( context.usuarioData.rol === 'ADMINISTRADOR'){
        const usuarios = await UsuarioMODEL.find({rol: ['ADMINISTRADOR' ,'USUARIO_CAJA']});
        return usuarios ;
      } else {  
        return null
      }
    },
    Usuario: async (parent, args) => {
      const usuario = await UsuarioMODEL.findOne({ _id: args._id });
      return usuario;
    },
    Clientes: async (parent, args, context) => {
        const clientes = await UsuarioMODEL.find({rol:'CLIENTE'});
        return clientes;
    },
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await UsuarioMODEL.create({
        nombre: args.nombre,
        apellido: args.apellido,    
        email: args.email,
        identificacion: args.identificacion,
        telefono: args.telefono,
        rol: args.rol,
      });

      if (Object.keys(args).includes('estado')) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },

    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UsuarioMODEL.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        email: args.email,
        identificacion: args.identificacion,
        telefono: args.telefono,
        estado: args.estado,
      },
        { new: true }
      );
      return usuarioEditado;  
    },

    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const usuarioEliminado = await UsuarioMODEL.findOneAndDelete({ _id: args._id });
        return usuarioEliminado;
      } else if (Object.keys(args).includes('email')) {
        const usuarioEliminado = await UsuarioMODEL.findOneAndDelete({ email: args.email });
        return usuarioEliminado;
      }
    },
  },
};

export { resolversUsuario };