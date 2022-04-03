import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js'
import { tiposProducto } from '../models/producto/tipos.js';
import { tiposFactura } from '../models/factura/tipos.js';
import { tiposDetalle } from '../models/detalle/tipos.js';
import { tiposAutenticacion } from '../graphql/auth/tipos.js'

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [ 
    tiposGlobales,
    tiposEnums,
    tiposUsuario,
    tiposProducto, 
    tiposFactura, 
    tiposDetalle, 
    tiposAutenticacion 
];   