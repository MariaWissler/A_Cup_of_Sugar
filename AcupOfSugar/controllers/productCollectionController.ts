import ProductCollectedModel from "../models/productsCollected";

export class ProductCollectionController {
  static async createProductCollected(request, response) {
    // //   var productId = request.body.productId;
    // //   var ownerId = request.body.ownerId;
    // //   var requesterId = request.body.requesterId;
    // //   var date = request.body.date;
    // //   var collected = request.body.collected;
    // //  // 422 client error
    //  if(productId == null || productId == ""){
    //    return response.status(422).send('Product Id cant be empty');
    //  }

    //  if(ownerId == null || ownerId == ""){
    //    return response.status(422).send('Owner Id cant be empty');
    //  }

    //  if(requesterId == null || requesterId == ""){
    //    return response.status(422).send('Requester Id cant be empty');
    //  }

    //  if(date== null){
    //   return response.status(422).send('We need a valid Date');
    // }

    //  if(collected == null){ // string, how to validate an image ?
    //   return response.status(422).send('Product needs to be collected to be on the records');
    // }

    const { productId, ownerId, requesterId, date, collected } = request.body;

    if (!productId || !ownerId || !requesterId || !date || !collected) {
      return response.status(422).send({
        message: "Please provide all details for Collected Product"
      });
    }

    const newProductCollected = new ProductCollectedModel({
      productId,
      ownerId,
      requesterId,
      date,
      collected
    });

    await newProductCollected.save();

    response.send({
      productId: newProductCollected.productId,
      ownerId: newProductCollected.ownerId,
      requesterId: newProductCollected.requesterId,
      date: newProductCollected.date,
      collected: newProductCollected.collected
    });
  }

  //  newProductCollected.save((error, newProductCollected)=>{
  //   if(error){
  //       response.status(500).send('Unable to save Status for this Product');
  //   }
  //   response.status(200).json({newProductCollected});
  // }); }

  static getCollectedProducts(request, response) {
    ProductCollectedModel.find((error, collections) => {
      if (error) {
        response.status(500).send("Collected Product not Found");
      }
      response.json(collections);
    });
  }

  static getCollectedProductById(request, response) {
    var collectedProductId = request.params.id;

    ProductCollectedModel.findById(
      collectedProductId,
      (error, collectedProductId) => {
        if (error) {
          response.status(500).send("Unable to find Collected Product");
        }
        response.status(200).json({ collectedProductId });
      }
    );
  }

  static updateCollectedProduct(request, response) {
    var collectedProductId = request.params.id;

    ProductCollectedModel.findByIdAndUpdate(
      collectedProductId,
      request.body,
      (error, collectedProduct) => {
        if (error) {
          response.status(500).json("Unable to Update Collected Product Info");
        }
        response.status(200).json({ collectedProduct });
      }
    );
  }

  static removeCollectedProduct(request, response) {
    var collectedProductId = request.params.id;

    ProductCollectedModel.findByIdAndRemove(
      collectedProductId,
      (error, collectedProductToRemove) => {
        if (error) {
          response.status(500).json("Unable to Remove Collected Product");
        }
        response.status(200).json({ collectedProductToRemove });
      }
    );
  }
}
