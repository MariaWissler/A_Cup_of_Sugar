import ProductModel from "../models/products";

export class ProductController{

  static async createProduct(request, response){
        // var addressId = request.body.addressId;
        // var productName = request.body.productName;
        // var productDescription = request.body.productDescription;
        // var productImage = request.body.productImage;
        // var availability = request.body.availability;
       // 422 client error 
      //  if(addressId == null || addressId == ""){
      //    return response.status(422).send('Address cant be empty');
      //  }
      //  if(productName == null || productName == ""){
      //    return response.status(422).send('Product Name cant be empty');
      //  }
      //  if(productDescription== null || productDescription == ""){
      //    return response.status(422).send('Product Description cant be empty');
      //  }
      //  if(productImage == null){ // string, how to validate an image ? 
      //   return response.status(422).send('We need an image to show to other users');
      // }
      //  if(availability == null){ // string, how to validate an image ? 
      //   return response.status(422).send('Product needs to be available');
      // }
      const {addressId, productName, productDescription, productImage, availability} = request.body
      
      if(!addressId || !productName || !productDescription || !productImage || !availability) {
        return response.status(422).send({
            message: 'Please provide complete product details'
        })
    }
 
       const newProduct = new ProductModel({
           addressId,
           productName,
           productDescription,
           productImage,
           availability
       });

       await newProduct.save();
      
       response.send({
        addressId : newProduct.addressId,
        productName: newProduct,
        productDescription: newProduct.productDescription,
        productImage: newProduct.productImage,
        availability: newProduct.availability
       });

      //  newProduct.save((error, newProduct)=>{
      //   if(error){
      //       response.status(500).send('Unable to create Product');
      //   }
      //   response.status(200).json({newProduct});
      // });

       }

    static getProducts(request, response){
        ProductModel.find((error, products) => {
            if(error){
                response.status(500).send('Product not Found');
            }
            response.json({products});
        });
    }

    static getProductById(request, response){
        var productId = request.params.id;
        ProductModel.findById(productId,(error, product)=> {
        if(error){
            response.status(500).send('Unable to find Product');
        }
        response.status(200).json({product});
        });
   }
   
   static updateProduct(request, response){
        var productId = request.params.id;

        ProductModel.findByIdAndUpdate(productId, request.body,(error, product)=>{
            if(error){
                response.status(500).json('Unable to Update Product Info');
            }
            response.status(200).json({product});
        });
   }

   static removeProduct(request, response){
    var productId = request.params.id;

    ProductModel.findByIdAndRemove(productId,(error, productToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove User');
        }
        response.status(200).json({productToRemove});
      });
   }

}