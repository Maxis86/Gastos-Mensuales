const Usuario = require ('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')
const jwt = require ('jsonwebtoken');


exports.autenticarUsuario = async (req, res) => {

    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    // extraer email y password
    const { email, password } = req.body;


    try {
        // Revisar que el usuario este registrado
        let usuario = await Usuario.findOne({ email });

        if(!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        // // crea el nuevo usuario
        // usuario = new Usuario(req.body);

        // Hashear el password
        const passCorrecto = await bcryptjs.compare(password, usuario.password)
        if(!passCorrecto){
            return res.status(400).json({msg: 'password incorrecto'})
        };

        //Crear y firmar el JWT
        const payload = {
            usuario: {
                id:usuario.id
            }
        };

        //firmar el JWT
        jwt.sign(payload, process.env.SECRETA,{
            expiresIn: 3600
        }, (error, token) =>{
            if(error) throw error;

            //Mensaje de confirmación
            res.json({token});
        })

        //mensaje de confirmación
        //res.json({msg: 'Usuario creado correctamente'})

    } catch (error) {
        console.log (error);
        //res.status(400).send('Huvo un error')
    }
    
}