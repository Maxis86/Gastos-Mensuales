
const mongoose = require('mongoose');

require('dotenv').config()

 
const conectarDB = async () =>{  
  
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB Conectada')
    } catch (error) {
        
        process.exit(1); // detener la app
    }

}

module.exports = conectarDB;