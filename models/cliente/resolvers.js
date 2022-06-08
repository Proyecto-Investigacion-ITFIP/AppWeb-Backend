import { ClienteMODEL } from "./cliente.js";

const resolversCliente = {
  Query: {
    Clientes: async (parent, args, context) => {
      const clientes = await ClienteMODEL.find();
      return clientes;
    },
    Cliente: async (parent, args) => {
      const cliente = await ClienteMODEL.findOne({ _id: args._id });
      return cliente;
    },
    BuscarCliente: async (parent, args)  => { 
      const buscarCliente = await ClienteMODEL.find({ nombre: args.nombre });
      return buscarCliente;
    },
  },

  Mutation: {
    crearCliente: async (parent, args) => {
      const clienteCreado = await ClienteMODEL.create({
        nombre: args.nombre,
        apellido: args.apellido,
        email: args.email,
        identificacion: args.identificacion,
        telefono: args.telefono,
        departamento: args.departamento,
        ciudad: args.ciudad,
      });

      return clienteCreado;
    },

    editarCliente: async (parent, args) => {
      const clienteEditado = await ClienteMODEL.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          apellido: args.apellido,
          email: args.email,
          identificacion: args.identificacion,
          telefono: args.telefono,
          departamento: args.departamento,
          ciudad: args.ciudad,
        },
        { new: true }
      );
      return clienteEditado;
    },

    eliminarCliente: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const clienteEliminado = await ClienteMODEL.findOneAndDelete({
          _id: args._id,
        });
        return clienteEliminado;
      } else if (Object.keys(args).includes("email")) {
        const clienteEliminado = await ClienteMODEL.findOneAndDelete({
          email: args.email,
        });
        return clienteEliminado;
      }
    },
  },
};

export { resolversCliente };
