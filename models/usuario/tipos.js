import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    email: String!
    identificacion: String!
    telefono: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }
  
  type Query {
    Usuarios: [Usuario]
    Usuario( _id: String! ): Usuario
  }
  
  type Mutation {
    
    crearUsuario(
      nombre: String!
      apellido: String!
      email: String!
      identificacion: String!
      telefono: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      email: String!  
      identificacion: String!
      telefono: String!
      estado: Enum_EstadoUsuario!
    ): Usuario

    eliminarUsuario( _id: String, email: String ) : Usuario
  }
`;

export { tiposUsuario };