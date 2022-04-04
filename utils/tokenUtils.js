import jwt from 'jsonwebtoken';

 const generarToken = (payload) => {
    return jwt.sign(payload, 'secret', {
        expiresIn: '24h',
    });
};

const validarToken = (token) => {
    if(token){
        const verficar = jwt.verify(token, 'secret', (err, data) =>{
            // console.log("error:",err, "verificacion", data);
            if (data) {
                return {
                    data: data,
                };
            }
            if (err){
                return {
                    error: err,
                };
            }
        });
        // console.log('verificado', verficar)
        return verficar;
    }
};

export { generarToken, validarToken };