import { UsuarioMODEL } from "../models/usuario/usuario";

const resolvers = {
  Query:{
    Usuarios: async (parent, args) =>{
      const Usuarios = await UsuarioMODEL.find
      return Usuarios;
    }
  },
  Mutation:{
    crearUsuario: async (paret, args) => {
      const usuarioCreado = await UsuarioMODEL.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        email: args.email,
        telefono: args.telefono,
        estado: args.estado,
        rol: args.rol,
      });
      return usuarioCreado;
    },
  },
};

export { resolvers };




import { gql } from "apollo-server-express";


const typeDefs = gql `

enum Enum_EstadoUsuario{
    PENDIANTE
    AUTORIZADO
    NO_AUTORIZADO
}

type Usuario{
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!

 }

type Query{
    Usuarios:[Usuario]
 }

 type Mutation{
    crearUsuario(
        nombre: String!
        apellido: String!
        identificacion: String!
        email: String!
        telefono: String!
        estado:
        rol:
     )
 }
`;

export { typeDefs } 