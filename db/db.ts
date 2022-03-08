import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(
    'mongodb+srv://jvaquiro:jvaquiro2@proyectomaestroproducto.nlggq.mongodb.net/MaestroProducto?retryWrites=true&w=majority'
  )
  .then(() => {
      console.log('conexion exitosa')
  })
  .catch((err) => {
      console.error('Error conenctado a la bd', err)
  });
};

export { connectDB };   