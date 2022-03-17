import { connectDB } from "./db/db";
import { detalleMODEL } from "./models/detalle/detalle";
import { facturaMODEL } from "./models/factura/factura";
import { productoMODEL } from "./models/producto/producto";
import { UserMODEL }  from "./models/usuario/usuario";

const main = async () => {
    await connectDB();  

};

main();

    // detalleMODEL.create({
    //     cantidad: 1,
    //     totalProductos: 0,
    //     factura: '6228d94630c8bbc6e6729b72',
    //     producto: '6228d80387d3258574863815',
    // })
    // .then((result) => {
    //     console.log('usuario creado', result);
    // }).catch((err) => { 
    //     console.error('Error creando el ususario', err);
    // });

    // MOSTRAR QUERY RELACION FUERTE 
    // const detalle = await detalleMODEL.find({ _id:'62290e8ae6ece6e6e1c25a3e' })
    // .populate('factura')
    // .populate('producto');
    // console.log('el detalle es:' , detalle)  


//     descuento: 0,
//     FechaPedido: Date.now(),
//     subtotal: 12,
//     IVA: 12,
//     total: 500,
//     cliente: '6228be50ff3f1eb8736e7178'
// })

// producto: 'casco',
// marca: 'rr',
// modelo: 'ET-22',
// precioUnidad: 10000,
// cantidadTotalExistente: 5,

// CRUD 

    //CREAR USUARIO
    // await UserMODEL.create({
    //     email:"correo3@.com",
    //     Identificacion: "0000",
    //     nombre: "david",
    //     apellido: "vaquiro",
    //     rol: "Administrador"
    // })
    // .then((result) => {
    //     console.log('usuario creado', result);
    // }).catch((err) => {
    //     console.error('Error creando el ususario', err);
    // });


    //OBTER USUARIO
    // await UserMODEL.find()
    // .then((restul) => {
    //     console.log('usuarios', restul)
    // })
    // .catch((err) => {
    //     console.error('Error obteninedo usuario', err)
    // })


    //EDITAR USUARIO
    // await UserMODEL.findOneAndUpdate({ email: 'correo1@.com' },
    // {
    //     nombre: 'duvan',
    //     apellido: 'lopez'
    // })
    // .then((result) => {
    //     console.log('Usr ACTUALIZADO', result)   
    // })
    // .catch((err) => {
    //     console.error('Error ACTUALIZANDO', err)
    // });


    //ElIMINAR USUARIO
    // await UserMODEL.findOneAndDelete({email: 'correo1@.com' })
    // .then((result) => {
    //     console.log('Usr ELIMINADO', result)   
    // })
    // .catch((err) => {
    //     console.error('Error ELIMINADO', err)
    // }); 