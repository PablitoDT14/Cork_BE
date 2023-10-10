import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

const databaseService = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection:{
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB
        },
        pool: {min:0, max:10}
    }
    )

    const table = 'customers';

    const getAllCustomers = ()=>{
        return knex(table).select();
    }

    const cors = initMiddleware(
        Cors({
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          origin: 'http://127.0.0.1/', 
        })
      );

    const getCustomer = (dni)=>{
        return knex(table).where('DNI',dni).select();
    }

    const createCustomer = ({dni, nombre, apellido, telefono, email, fechaNacimiento}) => {
        return knex(table).insert({
            dni:dni,
            nombre:nombre,
            apellido:apellido,
            telefono:telefono,
            email:email,
            fechaNacimiento: fechaNacimiento
        });
    };
return{
    createCustomer,
    getAllCustomers,
    getCustomer
};
};
module.exports={databaseService};
