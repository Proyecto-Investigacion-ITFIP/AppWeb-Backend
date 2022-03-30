import { ProductoMODEL } from "./producto.js";

const resolversProducto = {
    
    Query: {
        Productos: async (parent, args) => {
            const productos = await ProductoMODEL.find();
            return productos;
        },

        Producto: async (parent, args) => {
            const producto = await ProductoMODEL.findOne({ _id: args._id });
            return producto;
        },
    },

    Mutation: {
        crearProducto: async (parent, args) => {
            const productoCreado = await ProductoMODEL.create({
                nombreProducto: args.nombreProducto, 
                descripcion: args.descripcion,
                marca: args.marca,
                modelo: args.modelo,
                precioUnidad: args.precioUnidad,
                cantidadTotalExistente: args.cantidadTotalExistente,
            });
                if(Object.keys(args).includes('esatadoProducto')){
                    productoCreado.estadoProducto = args.estadoProducto;
                }
            return productoCreado;
        },

        editarProducto: async (parent, args) => {
            const productoEditado = await ProductoMODEL.findByIdAndUpdate(args._id, {
                nombreProducto: args.nombreProducto, 
                descripcion: args.descripcion,
                marca: args.marca,
                modelo: args.modelo,
                precioUnidad: args.precioUnidad,
                cantidadTotalExistente: args.cantidadTotalExistente,
            },
                { new: true }
            );
            return productoEditado;  
          },


        eliminarProducto: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const productoEliminado = await ProductoMODEL.findOneAndDelete({ _id: args._id });
                return productoEliminado;
            } else if (Object.keys(args).includes('nombreProducto')) {
                const productoEliminado = await ProductoMODEL.findOneAndDelete({ nombreProducto: args.nombreProducto });
                return productoEliminado;
            }     
        },
    },
};

export { resolversProducto };