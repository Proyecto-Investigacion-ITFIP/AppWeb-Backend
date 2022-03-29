import { DetalleMODEL } from "./detalle.js";

const resolversDetalle = {
    Query: {
        Detalles: async (parent, args) => {
            const detalles = await DetalleMODEL.find().populate('producto').populate('factura');
            return detalles;
        },

        Detalle: async (parent, args) => {
            const detalle = await DetalleMODEL.findOne({  _id: args._id  }).populate('producto').populate('factura');
            return detalle;
        },
     }, 

    Mutation: { 
        crearDetalle: async (parent, args) => {
            const detalleCreada = await DetalleMODEL.create({
                cantidad: args.cantidad,
                totalProductos: args.totalProductos,
                factura: args.factura,
                producto: args.producto,
                
            });
            return detalleCreada;
        },

        eliminarDetalle: async (async, args) => {
            if (Object.keys(args).includes('_id')){
                const detalleEliminada = await DetalleMODEL.findOneAndDelete({ _id: args._id });
                return detalleEliminada;
            };
        },
    }
};

export { resolversDetalle };