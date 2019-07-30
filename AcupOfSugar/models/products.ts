import { prop, Ref, Typegoose } from "typegoose";
import { Users } from "./users";
import { Message } from "./message";

export class Products extends Typegoose {
  @prop({ required: true })
  addressId: String;

  @prop({ required: true })
  name: String;

  @prop({ required: true })
  description: String;

  @prop({ required: true })
  availability: Boolean;

  @prop({ required: true })
  image: String;

  @prop({ ref: Users, required: true })
  user: Ref<Users>;

  @prop({ ref: Users })
  requestedBy: Ref<Users>;

  @prop({ ref: Message })
  messages: Ref<Message>;
}

const ProductModel = new Products().getModelForClass(Products);

export default ProductModel;
