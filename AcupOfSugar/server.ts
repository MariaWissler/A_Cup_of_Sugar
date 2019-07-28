import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

import router from './router/v1';
import config from './config/main';

//framework
const app = express();

// conectarse a la base de datos 
mongoose.connect(config.db,  { useNewUrlParser: true });

// wrap todas las librerias para que se utilizen en la aplicacion 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());

app.use('/uploads', express.static('uploads'))

router(app);
// mandar todas las rutas

// nueva variable 
let server;
// validar los puertos y ejecutar el metodo de expresss para que levante el servidor (listen) funcion  y nos va a decir que puerto , los puertos en main 
if(process.env.NODE_ENV !== config.test_env){
    server = app.listen(config.port, () => {
        console.log(`sever listening on port ${config.port}`);
    }); 
} else {
    server = app.listen(config.test_port, () => {
        console.log(`server listening on port ${config.test_port}`)
    });
}

export default server;