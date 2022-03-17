import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js'
// import { tiposUsuario }
// import { tiposDetalle }

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [tiposGlobales, tiposEnums, tiposUsuario];