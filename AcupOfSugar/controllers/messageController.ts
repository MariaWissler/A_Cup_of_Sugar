import MessageModel from "../models/message";
import UserModel from "../models/users";

export class MessageController {
  static async send(request, response) {
    const { from, to, body } = request.body;

    if (!from || !to || !body) {
      return response.status(400).json({
        message: "Please provide 'from, to, body' in request"
      });
    }

    try {
      const sender = await UserModel.findById(from);
      const recipient = await UserModel.findById(to);

      const message = MessageModel();
      message.body = body;
      message.from = sender;
      message.to = recipient;

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
}
