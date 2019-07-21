import ProductModel from "../models/products";
import * as fs from "fs";


export class ProductController{
  
  static async createProduct(request, response){
        
      let {_addressId, name, description, image,  availability} = request.body;
      image = "./img/chewy.jpg";

      if(!_addressId || !name || !description || !image || !availability) {
        return response.status(422).send({
            message: 'Please provide complete product details'
        })
      }
 
    let newProduct = new ProductModel();
    newProduct._addressId = _addressId;
    newProduct.name = name;
    newProduct.description = description;
    newProduct.image= fs.readFileSync(image);
    newProduct.availability = availability;

       try {
       await newProduct.save();
      
       response.send({
        addressId : newProduct.addressId,
        name: newProduct.name,
        description: newProduct.description,
        image: newProduct.image,
        availability: newProduct.availability
       });

       } catch (error) {
        console.log(error.message);
        response.status(500).send({
          message: 'Server ecountered an error. Please try again'
        })
      }

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