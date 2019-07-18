import * as mongoose from "mongoose";
import * as uuid from "uuid";
import { prop, Typegoose, ModelType, InstanceType } from "typegoose";

export class Users extends Typegoose{
   @prop({unique:true,default:uuid.v1()})
   _id:String;
   @prop({required:true})
   userName:String;
   
   @prop({required:true})
   name:String;
   
   @prop({required:true})
   email:String;
   }
   const UserModel = new Users().getModelForClass(Users);

   export default UserModel;