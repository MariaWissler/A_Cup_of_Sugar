import CollectedProductsModel from "../models/collectedProducts";

export class CollectedProductsController {
  static async createCollectedProduct(request, response) {
  
    const { productId, ownerId, requesterId, date, collected } = request.body;

    if (!productId || !ownerId || !requesterId || !date || !collected) {
      return response.status(422).send({
        message: "Please provide all details for Collected Product"
      });
    }

    let newProductCollected = new CollectedProductsModel();
      newProductCollected.productId = productId;
      newProductCollected.ownerId = ownerId;
      newProductCollected.requesterId = requesterId;
      newProductCollected.date = date;
      newProductCollected.collected = collected;
    
    try {
    await newProductCollected.save();

    response.send({
      productId: newProductCollected.productId,
      ownerId: newProductCollected.ownerId,
      requesterId: newProductCollected.requesterId,
      date: newProductCollected.date,
      collected: newProductCollected.collected
    });

    } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: 'Server ecountered an error. Please try again'
    });
  }
}

  static getCollectedProducts(request, response) {

    CollectedProductsModel.find((error, collections) => {
      if (error) {
        response.status(500).send("Collected Product not Found");
      }
      response.json(collections);
    });
  }

  static getCollectedProductById(request, response) {
    var collectedProductId = request.params.id;

    CollectedProductsModel.findById(
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

    CollectedProductsModel.findByIdAndUpdate(
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

    CollectedProductsModel.findByIdAndRemove(
      collectedProductId,
      (error, collectedProductToRemove) => {
        if (error) {
          response.status(500).json("Unable to Remove Collected Product");
        }
        response.status(200).json({ collectedProductToRemove });
      });
  }
}
