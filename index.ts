import { connectDB } from "./db/db";
import UserMODEL from "./models/user";

const main = async () => {
    await connectDB();

    //CREAR USUARIO
    // await UserMODEL.create({
    //     email:"correo@.com",
    //     Identificacion: "1234",
    //     nombre: "juan",
    //     apellido: "diaz",
    // })
    // .then((result) => {
    //     console.log('usuario creado', result);
    // }).catch((err) => {
    //     console.error('Error creando el ususario', err);
    // });


    //OBTER LOS USUARIOS
    await UserMODEL.find()
    .then((restul) => {
        console.log('usuarios', restul)
    })
    .catch((err) => {
        console.error('Error obteninedo usuario', err)
    })
};

main();