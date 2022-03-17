import  mongoose from 'mongoose';

const connectDB = async () => {
  return await mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
      console.log('conexion exitosa')
  })
  .catch((err) => {
      console.error('Error conenctado a la bd', err)
  });
};

export default connectDB ;   