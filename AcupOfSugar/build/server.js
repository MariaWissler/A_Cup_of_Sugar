"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var v1_1 = require("./router/v1");
var main_1 = require("./config/main");
//framework
var app = express();
// conectarse a la base de datos 
mongoose.connect(main_1.default.db, { useNewUrlParser: true });
// wrap todas las librerias para que se utilizen en la aplicacion 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use('/uploads', express.static('uploads'));
v1_1.default(app);
// mandar todas las rutas
// nueva variable 
var server;
// validar los puertos y ejecutar el metodo de expresss para que levante el servidor (listen) funcion  y nos va a decir que puerto , los puertos en main 
if (process.env.NODE_ENV !== main_1.default.test_env) {
    server = app.listen(main_1.default.port, function () {
        console.log("sever listening on port " + main_1.default.port);
    });
}
else {
    server = app.listen(main_1.default.test_port, function () {
        console.log("server listening on port " + main_1.default.test_port);
    });
}
exports.default = server;
//# sourceMappingURL=server.js.map