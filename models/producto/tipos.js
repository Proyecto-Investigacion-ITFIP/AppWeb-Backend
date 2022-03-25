import { gql } from "apollo-server-express";

const tiposProducto = gql`
  type Producto {
    _id: ID!
    nombreProducto: String!
    descripcion: String!
    marca: String!
    modelo: String!
    precioUnidad: Float!
    cantidadTotalExistente: Int!
    estadoProducto: Enum_EstadoProducto
  }
  
  type Query {
    Productos: [Producto]
    Producto(_id: String!): Producto
  }
  
  type Mutation {
    
    crearProducto(
      nombreProducto: String!
      descripcion: String!
      marca: String!
      modelo: String!
      precioUnidad: Float!
      cantidadTotalExistente: Int!
      estadoProducto: Enum_EstadoProducto
    ): Producto

    editarProducto(
      nombreProducto: String!
      descripcion: String!
      marca: String!
      modelo: String!
      precioUnidad: Float!
      cantidadTotalExistente: Int!
      estado: Enum_EstadoProducto
    ): Producto

    eliminarProducto(_id: String ): Producto
  }
`;

export { tiposProducto };