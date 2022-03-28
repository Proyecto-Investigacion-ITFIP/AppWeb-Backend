import { gql } from 'apollo-server-express';

const tiposFactura = gql `
    type Factura{
        _id: ID!
        descuento: Float!
        fechaPedido: Date!
        subtotal: Float!
        IVA: Float!
        total: Float!
        cliente: _id!
        
    }

`;

export { tiposFactura };