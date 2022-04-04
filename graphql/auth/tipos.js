import { gql } from 'apollo-server-express';

const tiposAutenticacion = gql`  
    type Token {
        token: String
        error: String
    }

  type Mutation {
    registro(
      nombre: String!
      apellido: String!
      email: String!
      identificacion: String!
      telefono: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
      contrasena: String!
    ): Token!

    login(
      email: String!
      contrasena: String!
    ): Token

    validarToken: Token

  }
`;

export { tiposAutenticacion };   