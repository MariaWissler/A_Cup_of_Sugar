import * as express from "express";
import { UserController } from "../controllers/userController";
import { AddressController } from "../controllers/addressController";
import { ProductController } from "../controllers/productController";
import { ProductCollectionController } from "../controllers/productCollectionController";
import { UserRatingController } from "../controllers/userRatingController";

// app es parametro 
export default (app)=>{
    let addressController = new AddressController();
    let productController = new ProductController();
    let productCollectionController =  new ProductCollectionController();
    let userRatingController = new UserRatingController();

    let apiRoutes = express.Router();
    
    let userRouter = express.Router();
    let addressRouter = express.Router();
    let productRouter = express.Router();
    let productCollectedRouter = express.Router();
    let userRateRouter = express.Router();

    apiRoutes.use("/users",userRouter);
    apiRoutes.use("/address",addressRouter);
    apiRoutes.use("/product",productRouter);
    apiRoutes.use("/productcollected",productCollectedRouter);
    apiRoutes.use("/userrate",userRateRouter);

    //Define routes for users
    userRouter.get('/', UserController.getUsers);
    userRouter.get('/:id', UserController.getUserById);
    userRouter.post('/', UserController.createUser);
    userRouter.put('/:id', UserController.updateUser);
    userRouter.delete('/:id', UserController.removeUser);

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
}