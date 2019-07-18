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
    // let addressController = new AddressController();
    // let productController = new ProductController();
    // let productCollectionController =  new ProductCollectionController();
    // let userRatingController = new UserRatingController();
    var apiRoutes = express.Router();
    var userRouter = express.Router();
    var addressRouter = express.Router();
    var productRouter = express.Router();
    var productCollectedRouter = express.Router();
    var userRateRouter = express.Router();
    apiRoutes.use("/users", userRouter);
    apiRoutes.use("/addresses", addressRouter);
    apiRoutes.use("/products", productRouter);
    apiRoutes.use("/productscollected", productCollectedRouter);
    apiRoutes.use("/userratings", userRateRouter);
    //Define routes for users
    userRouter.get('/', userController_1.UserController.getUsers);
    userRouter.get('/:id', userController_1.UserController.getUserById);
    userRouter.post('/', userController_1.UserController.createUser);
    userRouter.put('/:id', userController_1.UserController.updateUser);
    userRouter.delete('/:id', userController_1.UserController.removeUser);
    //Define routes for address
    addressRouter.get('/', addressController_1.AddressController.getAddress);
    addressRouter.get('/:id', addressController_1.AddressController.getAddressById);
    addressRouter.post('/', addressController_1.AddressController.createAddress);
    addressRouter.put('/:id', addressController_1.AddressController.updateAddress);
    addressRouter.delete('/:id', addressController_1.AddressController.removeAddress);
    //Define routes for product
    productRouter.get('/', productController_1.ProductController.getProducts);
    productRouter.get('/:id', productController_1.ProductController.getProductById);
    productRouter.post('/', productController_1.ProductController.createProduct);
    productRouter.put('/:id', productController_1.ProductController.updateProduct);
    productRouter.delete('/:id', productController_1.ProductController.removeProduct);
    //Define routes for Collected Products
    productCollectedRouter.get('/', productCollectionController_1.ProductCollectionController.getCollectedProducts);
    productCollectedRouter.get('/:id', productCollectionController_1.ProductCollectionController.getCollectedProductById);
    productCollectedRouter.post('/', productCollectionController_1.ProductCollectionController.createProductCollected);
    productCollectedRouter.put('/:id', productCollectionController_1.ProductCollectionController.updateCollectedProduct);
    productCollectedRouter.delete('/:id', productCollectionController_1.ProductCollectionController.removeCollectedProduct);
    //Define routes for Rating
    userRateRouter.get('/', userRatingController_1.UserRatingController.getRatings);
    userRateRouter.get('/:id', userRatingController_1.UserRatingController.getRatingById);
    userRateRouter.post('/', userRatingController_1.UserRatingController.createRating);
    userRateRouter.put('/:id', userRatingController_1.UserRatingController.updateRating);
    userRateRouter.delete('/:id', userRatingController_1.UserRatingController.removeRating);
    // Colleccion de Rutas 
    app.use('/api', apiRoutes);
});
//# sourceMappingURL=v1.js.map