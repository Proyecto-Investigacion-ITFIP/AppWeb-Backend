import { resolversUsuario } from '../models/usuario/resolvers.js'
import { resolversProducto } from '../models/producto/resolvers.js';
import { resolversFactura } from '../models/factura/resolvers.js';
import { resolversDetalle } from '../models/detalle/resolvers.js';
import { resolversAutenticacion } from './auth/resolvers.js';

export const resolvers = [
    resolversUsuario,
    resolversProducto,
    resolversFactura, 
    resolversDetalle,
    resolversAutenticacion
];