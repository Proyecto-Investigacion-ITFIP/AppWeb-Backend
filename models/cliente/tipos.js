import { gql } from "apollo-server-express";

const tiposCliente = gql`
  type Cliente {
    _id: ID!
    nombre: String!
    apellido: String!
    email: String!
    identificacion: String!
    telefono: String!
    departamento: String!
    ciudad: String!
  }
  
  type Query {
    Clientes: [Cliente]
    Cliente( _id: String! ): Cliente
  }
  
  type Mutation {
    
    crearCliente(
      nombre: String!
      apellido: String!
      email: String!
      identificacion: String!
      telefono: String!
      departamento: String!
      ciudad: String!
    ): Cliente

    editarCliente(
      _id: String!
      nombre: String!
      apellido: String!
      email: String!  
      identificacion: String!
      telefono: String!
      departamento: String!
      ciudad: String!
    ): Cliente

    eliminarCliente( _id: String, email: String ) : Cliente
  }
`;

export { tiposCliente };