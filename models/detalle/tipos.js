import { gql } from 'apollo-server-express';

const tiposDetalle = gql `
    type Detalle{
        _id: ID!
        cantidad: Int!
        totalProductos: Int!
        factura: Factura!
        producto: Producto!
    }

    type Query{
        Detalles: [Detalle]
        Detalle( _id: String! ): Detalle
    }

    type Mutation{
        crearDetalle(
            cantidad: Int!
            totalProductos: Int!
            factura: String!
            producto: String!
        ): Detalle

        eliminarDetalle(
            _id: String
        ): Detalle
    }
`;

export { tiposDetalle };