import MessageModel from "../models/message";
import UserModel from "../models/users";
import ProductModel from "../models/products";

export class MessageController {
  static async send(request, response) {
    const { from, to, body, productId } = request.body;

    if (!from || !to || !body || !productId ) {
      return response.status(400).json({
        message: "Please provide 'from, to, body, productId' in request"
      });
    }

    try {
      const sender = await UserModel.findById(from);
      const recipient = await UserModel.findById(to);
      const product = await ProductModel.findById(productId);
      // console.log('product', product);

      const message = MessageModel().populate("productChat");
      message.body = body;
      message.from = sender;
      message.to = recipient;
      message.product = product;
      console.log('message.product', message.product);

      await message.save();
      sender.messages.push(message);
      recipient.messages.push(message);
      
      await sender.save();
      await recipient.save();
      
      response.send({
        message: "Message sent successfully"
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  
static async getMesssagesByProduct(request, response) {
  const productId = request.params.id;

  try {
    const messageByProduct = await MessageModel.find({product: productId});
    if (!messageByProduct) {
      return response.status(404).json({
        messageByProduct: "not found"
      });
    }
    messageByProduct.isRead = true;
    response.send(messageByProduct);
  } catch (error) {
    response.status(500).json({
      message: 'Failed to get messages'
    })
  }
}


}
