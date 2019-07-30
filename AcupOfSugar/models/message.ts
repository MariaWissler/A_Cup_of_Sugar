import mongoose from "mongoose";
import { prop, Typegoose, Ref } from "typegoose";
import { Users } from "./users";
import { Products } from "./products";

export class Message extends Typegoose {
  @prop({ required: true })
  body: String;

  @prop({ default: false })
  isRead: Boolean;

  @prop({ ref: Users, required: true })
  from: Ref<Users>;

  @prop({ ref: Users, required: true })
  to: Ref<Users>;

  @prop({ ref: Products, required: true })
  product: Ref<Products>;
}

const MessageModel = new Message().getModelForClass(Message, {
  schemaOptions: {
    timestamps: true
  }
});

export default MessageModel;
