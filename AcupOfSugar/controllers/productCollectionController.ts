import productCollectedTable from "../models/productsCollected";

export class ProductCollectionController{
  public createProductCollected(request, response){
    var productId = request.body.productId;
    var ownerId = request.body.ownerId;
    var requesterId = request.body.requesterId;
    var date = request.body.date;
    var collected = request.body.collected;
   // 422 client error 
   if(productId == null || productId == ""){ // do we need this?
     return response.status(422).send('Product Id cant be empty');
   }

   if(ownerId == null || ownerId == ""){
     return response.status(422).send('Owner Id cant be empty');
   }

   if(requesterId == null || requesterId == ""){
     return response.status(422).send('Requester Id cant be empty');
   }

   if(date== null || date == ""){ // how to verify date is not in the future ? 
    return response.status(422).send('We need a valid Date');
  }

   if(collected == false){ // string, how to validate an image ? 
    return response.status(422).send('Product needs to be collected to be on the records');
  }

   var newProductCollected = new productCollectedTable({
       productId,
       ownerId,
       requesterId,
       date,
       collected,  
   });

   newProductCollected.save((error, newProductCollected)=>{
    if(error){
        response.status(500).send('Unable to save Status for this Product');
    }
    response.status(200).json({newProductCollected});
  });

  }

    public getCollectedProducts(request, response){
        productCollectedTable.find((error, collections) => {
            if(error){
                response.status(500).send('Collected Product not Found');
            }
            response.json(collections);
        });
    }

    public getCollectedProductById(request, response){
        var collectedProductId = request.params.id;

        productCollectedTable.findById(collectedProductId,(error, collectedProductId)=> {
        if(error){
            response.status(500).send('Unable to find Collected Product');
        }
        response.status(200).json({collectedProductId});
        });
   }
   
   public updateCollectedProduct(request, response){
        var collectedProductId = request.params.id;

        productCollectedTable.findByIdAndUpdate(collectedProductId, request.body,(error, collectedProduct)=>{
            if(error){
                response.status(500).json('Unable to Update Collected Product Info');
            }
            response.status(200).json({collectedProduct});
        });
   }

   public removeCollectedProduct(request, response){
       var collectedProductId = request.params.id;

       productCollectedTable.findByIdAndRemove(collectedProductId,(error, collectedProductToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove Collected Product');
        }
        response.status(200).json({collectedProductToRemove});
      });
   }

}