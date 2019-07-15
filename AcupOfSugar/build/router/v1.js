"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userController_1 = require("../controllers/userController");
var addressController_1 = require("../controllers/addressController");
var productController_1 = require("../controllers/productController");
var productCollectionController_1 = require("../controllers/productCollectionController");
var userRatingController_1 = require("../controllers/userRatingController");
// app es parametro 
exports.default = (function (app) {
    var addressController = new addressController_1.AddressController();
    var productController = new productController_1.ProductController();
    var productCollectionController = new productCollectionController_1.ProductCollectionController();
    var userRatingController = new userRatingController_1.UserRatingController();
    var apiRoutes = express.Router();
    var userRouter = express.Router();
    var addressRouter = express.Router();
    var productRouter = express.Router();
    var productCollectedRouter = express.Router();
    var userRateRouter = express.Router();
    apiRoutes.use("/users", userRouter);
    apiRoutes.use("/address", addressRouter);
    apiRoutes.use("/product", productRouter);
    apiRoutes.use("/productcollected", productCollectedRouter);
    apiRoutes.use("/userrate", userRateRouter);
    //Define routes for users
    userRouter.get('/', userController_1.UserController.getUsers);
    userRouter.get('/:id', userController_1.UserController.getUserById);
    userRouter.post('/', userController_1.UserController.createUser);
    userRouter.put('/:id', userController_1.UserController.updateUser);
    userRouter.delete('/:id', userController_1.UserController.removeUser);
    //Define routes for address
    addressRouter.get('/', addressController.getAddress);
    addressRouter.get('/:id', addressController.getAddressById);
    addressRouter.post('/', addressController.createAddress);
    addressRouter.put('/:id', addressController.updateAddress);
    addressRouter.delete('/:id', addressController.removeAddress);
    //Define routes for product
    productRouter.get('/', productController.getProducts);
    productRouter.get('/:id', productController.getProductById);
    productRouter.post('/', productController.createProduct);
    productRouter.put('/:id', productController.updateProduct);
    productRouter.delete('/:id', productController.removeProduct);
    //Define routes for Collected Products
    productCollectedRouter.get('/', productCollectionController.getCollectedProducts);
    productCollectedRouter.get('/:id', productCollectionController.getCollectedProductById);
    productCollectedRouter.post('/', productCollectionController.createProductCollected);
    productCollectedRouter.put('/:id', productCollectionController.updateCollectedProduct);
    productCollectedRouter.delete('/:id', productCollectionController.removeCollectedProduct);
    //Define routes for Rating
    userRateRouter.get('/', userRatingController.getRatings);
    userRateRouter.get('/:id', userRatingController.getRatingById);
    userRateRouter.post('/', userRatingController.createRating);
    userRateRouter.put('/:id', userRatingController.updateRating);
    userRateRouter.delete('/:id', userRatingController.removeRating);
    // Colleccion de Rutas 
    app.use('/api', apiRoutes);
});
//# sourceMappingURL=v1.js.map