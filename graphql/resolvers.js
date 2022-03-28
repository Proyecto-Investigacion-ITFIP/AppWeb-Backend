import { resolversUsuario } from '../models/usuario/resolvers.js'
import { resolversProducto } from '../models/producto/resolvers.js';
import { resolversFactura } from '../models/factura/resolvers.js';
// import { resolverDetalle }

export const resolvers = [resolversUsuario, resolversProducto, resolversFactura];