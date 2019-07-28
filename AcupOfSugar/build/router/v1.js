"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userController_1 = require("../controllers/userController");
var addressController_1 = require("../controllers/addressController");
var productController_1 = require("../controllers/productController");
var productCollectionController_1 = require("../controllers/productCollectionController");
var userRatingsController_1 = require("../controllers/userRatingsController");
var multer = require("multer");
var crypto_1 = require("crypto");
var messageController_1 = require("../controllers/messageController");
var storage = multer.diskStorage({
    destination: function (req, file, cb) { return cb(null, './uploads'); },
    filename: function (req, file, cb) {
        var fileSplit = file.originalname.split('.');
        var ext = fileSplit[fileSplit.length - 1];
        var filename = crypto_1.randomBytes(8).toString('hex') + "." + ext;
        cb(null, filename);
    }
});
var upload = multer({ storage: storage });
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
    var messageRouter = express.Router();
    apiRoutes.use("/users", userRouter);
    apiRoutes.use("/addresses", addressRouter);
    apiRoutes.use("/products", productRouter);
    apiRoutes.use("/productscollected", productCollectedRouter);
    apiRoutes.use("/userratings", userRateRouter);
    apiRoutes.use('/messages', messageRouter);
    //Define routes for messages 
    messageRouter.post('/', messageController_1.MessageController.send);
    //Define routes for users
    userRouter.get('/', userController_1.UserController.getUsers);
    userRouter.get('/:id', userController_1.UserController.getUserById);
    userRouter.post('/', userController_1.UserController.createUser);
    userRouter.put('/:id', userController_1.UserController.updateUser);
    userRouter.delete('/:id', userController_1.UserController.removeUser);
    userRouter.get('/email/:email', userController_1.UserController.getByEmail);
    userRouter.get('/:id/messages', userController_1.UserController.getMesssages);
    //Define routes for address
    addressRouter.get('/', addressController_1.AddressController.getAddress);
    addressRouter.get('/:id', addressController_1.AddressController.getAddressById);
    addressRouter.post('/', addressController_1.AddressController.createAddress);
    addressRouter.put('/:id', addressController_1.AddressController.updateAddress);
    addressRouter.delete('/:id', addressController_1.AddressController.removeAddress);
    //Define routes for product
    productRouter.get('/', productController_1.ProductController.getProducts);
    productRouter.get('/:id', productController_1.ProductController.getProductById);
    productRouter.post('/', upload.single('image'), productController_1.ProductController.createProduct);
    productRouter.put('/:id', productController_1.ProductController.updateProduct);
    productRouter.delete('/:id', productController_1.ProductController.removeProduct);
    productRouter.post('/:id/requests', productController_1.ProductController.addRequest);
    productRouter.get('/:userId/requests', productController_1.ProductController.getRequestedProducts);
    //Define routes for Collected Products
    productCollectedRouter.get('/', productCollectionController_1.CollectedProductsController.getCollectedProducts);
    productCollectedRouter.get('/:id', productCollectionController_1.CollectedProductsController.getCollectedProductById);
    productCollectedRouter.post('/', productCollectionController_1.CollectedProductsController.createCollectedProduct);
    productCollectedRouter.put('/:id', productCollectionController_1.CollectedProductsController.updateCollectedProduct);
    productCollectedRouter.delete('/:id', productCollectionController_1.CollectedProductsController.removeCollectedProduct);
    //Define routes for Rating
    userRateRouter.get('/', userRatingsController_1.UserRatingsController.getRatings);
    userRateRouter.get('/:id', userRatingsController_1.UserRatingsController.getRatingById);
    userRateRouter.post('/', userRatingsController_1.UserRatingsController.createRating);
    userRateRouter.put('/:id', userRatingsController_1.UserRatingsController.updateRating);
    userRateRouter.delete('/:id', userRatingsController_1.UserRatingsController.removeRating);
    // Colleccion de Rutas 
    app.use('/api', apiRoutes);
});
//# sourceMappingURL=v1.js.map