import * as express from "express";
import { UserController } from "../controllers/userController";
import { AddressController } from "../controllers/addressController";
import { ProductController } from "../controllers/productController";
import { CollectedProductsController } from "../controllers/productCollectionController";
import { UserRatingsController } from "../controllers/userRatingsController";
import * as multer from "multer";
import { randomBytes } from 'crypto';
import { MessageController } from "../controllers/messageController";

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => {
        const fileSplit = file.originalname.split('.');
        const ext = fileSplit[fileSplit.length  - 1];
        const filename = `${randomBytes(8).toString('hex')}.${ext}`;
        cb(null, filename)
    }
})
const upload = multer({ storage });

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
    let messageRouter = express.Router();

    apiRoutes.use("/users",userRouter);
    apiRoutes.use("/addresses",addressRouter);
    apiRoutes.use("/products",productRouter);
    apiRoutes.use("/productscollected",productCollectedRouter);
    apiRoutes.use("/userratings",userRateRouter);
    apiRoutes.use('/messages', messageRouter);
    

    //Define routes for messages 
    messageRouter.post('/', MessageController.send)

    //Define routes for users
    userRouter.get('/', UserController.getUsers);
    userRouter.get('/:id', UserController.getUserById);
    userRouter.post('/', UserController.createUser);
    userRouter.put('/:id', UserController.updateUser);
    userRouter.delete('/:id', UserController.removeUser);
    userRouter.get('/email/:email', UserController.getByEmail);
    userRouter.get('/:id/messages', UserController.getMesssages)


    //Define routes for address
    addressRouter.get('/', AddressController.getAddress);
    addressRouter.get('/:id', AddressController.getAddressById);
    addressRouter.post('/', AddressController.createAddress);
    addressRouter.put('/:id', AddressController.updateAddress);
    addressRouter.delete('/:id', AddressController.removeAddress);

    //Define routes for product
    productRouter.get('/', ProductController.getProducts);
    productRouter.get('/:id', ProductController.getProductById);
    productRouter.post('/', upload.single('image'), ProductController.createProduct);
    productRouter.put('/:id', ProductController.updateProduct);
    productRouter.delete('/:id', ProductController.removeProduct);
    productRouter.post('/:id/requests', ProductController.addRequest);
    productRouter.get('/:userId/requests', ProductController.getRequestedProducts)

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