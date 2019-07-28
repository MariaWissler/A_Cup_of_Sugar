import ProductModel from "../models/products";
import UserModel from "../models/users";

export class ProductController {
  static async createProduct(request, response) {
    const { file } = request;
    let { addressId, name, description, availability, userId } = request.body;
    console.log(request.body);
    
    if (!addressId || !name || !description || !availability || !userId) {
      return response.status(400).send({
        message: "Please provide complete product details"
      });
    }

    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        return response.status(404).json({
          message: `User with ID '${userId}' not found`
        });
      }

      let newProduct = new ProductModel({
        addressId,
        name,
        description,
        availability,
        image: file.path,
        user
      });

      await newProduct.save();

      response.send({
        addressId: newProduct.addressId,
        name: newProduct.name,
        description: newProduct.description,
        image: newProduct.image,
        availability: newProduct.availability
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({
        message: "Server ecountered an error. Please try again"
      });
    }
  }

  static async getProducts(request, response) {
    try {
      const products = await ProductModel.find({ availability: true }).populate(
        "user"
      );
      response.json({ products });
    } catch (error) {
      response.status(500).send("Products not found");
    }
    // ProductModel.find((error, products) => {
    //   if (error) {
    //     response.status(500).send("Product not Found");
    //   }

    //   response.json({ products });
    // });
  }

  static async getProductById(request, response) {
    var productId = request.params.id;
    try {
      const product = await ProductModel.findById(productId).populate("user");
      response.json({ product });
    } catch (error) {
      response.status(500).send("Unable to find Product");
    }
    // ProductModel.findById(productId, (error, product) => {
    //   if (error) {
    //     response.status(500).send("Unable to find Product");
    //   }
    //   response.status(200).json({ product });
    // });
  }

  static updateProduct(request, response) {
    var productId = request.params.id;

    ProductModel.findByIdAndUpdate(
      productId,
      request.body,
      (error, product) => {
        if (error) {
          response.status(500).json("Unable to Update Product Info");
        }
        response.status(200).json({ product });
      }
    );
  }

  static removeProduct(request, response) {
    const productId = request.params.id;

    ProductModel.findByIdAndRemove(productId, (error, productToRemove) => {
      if (error) {
        response.status(500).json("Unable to Remove User");
      }
      response.status(200).json({ productToRemove });
    });
  }

  static async addRequest(request, response) {
    const productId = request.params.id;
    const { userId } = request.body;

    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        return response.status(404).json({
          message: `User with ID '${userId}' not found`
        });
      }

      const product = await ProductModel.findById(productId).populate("user");
      if (!product) {
        return response.status(404).json({
          message: `Product with ID '${productId}' not found`
        });
      }

      product.availability = false;
      product.requestedBy = user;
      await product.save();

      response.send({ message: "Request added successfull" });
    } catch (error) {
      response.status(500).json({
        message: error.message
      });
    }
  }

  static async getRequestedProducts(request, response) {
    // get list of products posted by current user
    // return products with requestedBy.lenght > 1 so we know someone requested it
    const userId = request.params.id;

    try {
      const currentUserProducts = await ProductModel.find({userId, availability: false }).populate(
        "requestedBy"
      ); // find products posted by current user
      
      return response.json({ currentUserProducts });
    } catch (error) {
      response.status(500).send("Products not found");
    }

}


}

