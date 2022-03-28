import { gql } from 'apollo-server-express';

const tiposFactura = gql `
    type Factura{
        _id: ID!
        descuento: Float!
        fechaPedido: Date!
        subtotal: Float!
        iva: Float!
        total: Float!
        cliente: Usuario!
    }

    type Query{
      Facturas: [Factura]
      Factura( _id: String! ): Factura
    }

    type Mutation{
      crearFactura(
        descuento: Float!
        fechaPedido: Date!
        subtotal: Float!
        iva: Float!
        total: Float!
        cliente: String!
      ): Factura

      eliminarFactura( _id: String ) : Factura
    
    }
`;

export { tiposFactura };