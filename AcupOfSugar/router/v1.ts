import * as express from "express";
import { UserController } from "../controllers/userController";
import { AddressController } from "../controllers/addressController";
import { ProductController } from "../controllers/productController";
import { ProductCollectionController } from "../controllers/productCollectionController";
import { UserRatingController } from "../controllers/userRatingController";

// app es parametro 
export default (app)=>{
    // let addressController = new AddressController();
    // let productController = new ProductController();
    // let productCollectionController =  new ProductCollectionController();
    // let userRatingController = new UserRatingController();

    let apiRoutes = express.Router();
    
    let userRouter = express.Router();
    let addressRouter = express.Router();
    let productRouter = express.Router();
    let productCollectedRouter = express.Router();
    let userRateRouter = express.Router();

    apiRoutes.use("/users",userRouter);
    apiRoutes.use("/addresses",addressRouter);
    apiRoutes.use("/products",productRouter);
    apiRoutes.use("/productscollected",productCollectedRouter);
    apiRoutes.use("/userratings",userRateRouter);

    //Define routes for users
    userRouter.get('/', UserController.getUsers);
    userRouter.get('/:id', UserController.getUserById);
    userRouter.post('/', UserController.createUser);
    userRouter.put('/:id', UserController.updateUser);
    userRouter.delete('/:id', UserController.removeUser); 



    //Define routes for address
    addressRouter.get('/', AddressController.getAddress);
    addressRouter.get('/:id', AddressController.getAddressById);
    addressRouter.post('/', AddressController.createAddress);
    addressRouter.put('/:id', AddressController.updateAddress);
    addressRouter.delete('/:id', AddressController.removeAddress);

    //Define routes for product
    productRouter.get('/', ProductController.getProducts);
    productRouter.get('/:id', ProductController.getProductById);
    productRouter.post('/', ProductController.createProduct);
    productRouter.put('/:id', ProductController.updateProduct);
    productRouter.delete('/:id', ProductController.removeProduct);

    //Define routes for Collected Products
    productCollectedRouter.get('/', ProductCollectionController.getCollectedProducts);
    productCollectedRouter.get('/:id', ProductCollectionController.getCollectedProductById);
    productCollectedRouter.post('/', ProductCollectionController.createProductCollected);
    productCollectedRouter.put('/:id', ProductCollectionController.updateCollectedProduct);
    productCollectedRouter.delete('/:id', ProductCollectionController.removeCollectedProduct);

    //Define routes for Rating
    userRateRouter.get('/', UserRatingController.getRatings);
    userRateRouter.get('/:id', UserRatingController.getRatingById);
    userRateRouter.post('/', UserRatingController.createRating);
    userRateRouter.put('/:id', UserRatingController.updateRating);
    userRateRouter.delete('/:id', UserRatingController.removeRating);

    // Colleccion de Rutas 
    app.use('/api', apiRoutes);
}