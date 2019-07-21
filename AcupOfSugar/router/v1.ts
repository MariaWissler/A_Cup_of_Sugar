import * as express from "express";
import { UserController } from "../controllers/userController";
import { AddressController } from "../controllers/addressController";
import { ProductController } from "../controllers/productController";
import { CollectedProductsController } from "../controllers/productCollectionController";
import { UserRatingsController } from "../controllers/userRatingsController";

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
    productCollectedRouter.get('/', CollectedProductsController.getCollectedProducts);
    productCollectedRouter.get('/:id', CollectedProductsController.getCollectedProductById);
    productCollectedRouter.post('/', CollectedProductsController.createCollectedProduct);
    productCollectedRouter.put('/:id', CollectedProductsController.updateCollectedProduct);
    productCollectedRouter.delete('/:id', CollectedProductsController.removeCollectedProduct);

    //Define routes for Rating
    userRateRouter.get('/', UserRatingsController.getRatings);
    userRateRouter.get('/:id', UserRatingsController.getRatingById);
    userRateRouter.post('/', UserRatingsController.createRating);
    userRateRouter.put('/:id', UserRatingsController.updateRating);
    userRateRouter.delete('/:id', UserRatingsController.removeRating);

    // Colleccion de Rutas 
    app.use('/api', apiRoutes);
}