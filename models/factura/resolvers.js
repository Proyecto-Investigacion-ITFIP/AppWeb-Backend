import { FacturaMODEL } from "./factura.js";

const resolversFactura = {
    Query: {
        Facturas: async (parent, args) => {
            const facturas = await FacturaMODEL.find().populate('cliente');
            return facturas;
        },

        Factura: async (parent, args) => {
            const factura = await FacturaMODEL.findOne({ _id: args._id }).populate('cliente');  
            return factura;
        },
    },

    Mutation: { 
        crearFactura: async (parent, args) => {
            const facturaCreada = await FacturaMODEL.create({
                descuento: args.descuento,
                fechaPedido: args.fechaPedido,
                subtotal: args.subtotal,
                iva: args.iva,
                total: args.total,
                cliente: args.cliente
            });
            return facturaCreada;
        },

        eliminarFactura: async (async, args) => {
            if (Object.keys(args).includes('_id')){
                const facturaEliminada = await FacturaMODEL.findOneAndDelete({ _id: args._id });
                return facturaEliminada;
            };
        },
    }
};

export { resolversFactura };