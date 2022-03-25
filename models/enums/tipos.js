import { gql } from 'apollo-server-express';

const tiposEnums = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
  enum Enum_Rol {
    USUARIO_CAJA
    CLIENTE
    ADMINISTRADOR
  }
  enum Enum_EstadoProducto{
    DISPONIBLE
    AGOTADO
  }
`;

export { tiposEnums };