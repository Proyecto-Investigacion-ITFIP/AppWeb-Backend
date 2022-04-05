import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from 'dotenv'
import  connectDB  from "./db/db.js";
import { tipos } from "./graphql/tipos.js";
import { resolvers } from "./graphql/resolvers.js"
import { validarToken } from "./utils/tokenUtils.js"

dotenv.config();    

const getUsuarioData = (token) => {
    const verificacion = validarToken(token.split(' ')[1]);
    if(verificacion.data){
        return verificacion.data;
    } else {
        return null
    }
};

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req }) => {
    //obtener el token desde la variable req
    //console.log('token desde el frond: ',req.headers.authorization)
    //si el reques tiene un token; validar si esta ok 
    const token = req.headers?.authorization ?? null;
    if (token) {
      const usuarioData = getUsuarioData(token);
      if (usuarioData) {
        return { usuarioData };
      }
    }
    return null;
  },
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async ()=> {
    await connectDB();
    await server.start();

    server.applyMiddleware({ app });

    console.log('servidor listo')
});