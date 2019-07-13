import productTable from "../models/products";

export class ProductsController{

    public createProduct(request, response){
        var addressId = request.body.addressId;
        var productName = request.body.productName;
        var productDescription = request.body.productDescription;
        var productImage = request.body.productImage;
        var availability = request.body.availability;
       // 422 client error 
       if(addressId == null || addressId == ""){
         return response.status(422).send('Address cant be empty');
       }
 
       if(productName == null || productName == ""){
         return response.status(422).send('Product Name cant be empty');
       }
 
       if(productDescription== null || productDescription == ""){
         return response.status(422).send('Product Description cant be empty');
       }

       if(productImage== null || productImage == ""){ // string, how to validate an image ? 
        return response.status(422).send('We need an image to show to other users');
      }

       if(availability == false){ // string, how to validate an image ? 
        return response.status(422).send('Product needs to be available');
      }
 
       var newProduct = new productTable({
           addressId,
           productName,
           productDescription,
           productImage,
           availability
       });

       newProduct.save((error, newProduct)=>{
        if(error){
            response.status(500).send('Unable to create Product');
        }
        response.status(200).json({newProduct});
      });

      }
      
    public getProducts(request, response){
        productTable.find((error, products) => {
            if(error){
                response.status(500).send('Product not Found');
            }
            response.json({products});
        });
    }

    public getProductById(request, response){
        var productId = request.params.id;
        productTable.findById(productId,(error, product)=> {
        if(error){
            response.status(500).send('Unable to find Product');
        }
        response.status(200).json({product});
        });
   }
   
   public updateProduct(request, response){
        var productId = request.params.id;

        productTable.findByIdAndUpdate(productId, request.body,(error, product)=>{
            if(error){
                response.status(500).json('Unable to Update Product Info');
            }
            response.status(200).json({product});
        });
   }

   public removeProduct(request, response){
    var productId = request.params.id;

    productTable.findByIdAndRemove(productId,(error, productToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove User');
        }
        response.status(200).json({productToRemove});
      });
   }

}