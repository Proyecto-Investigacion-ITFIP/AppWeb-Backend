import { ProductoMODEL } from "./producto.js";

const resolversProducto = {
    
    Query: {
        Productos: async (parent, args) => {
            const productos = await ProductoMODEL.find();
            return productos;
        },

        Producto: async (parent, args) =>{
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


        eliminarProducto: async (parent, args) => {
                
        }
    }
};

export { resolversProducto };