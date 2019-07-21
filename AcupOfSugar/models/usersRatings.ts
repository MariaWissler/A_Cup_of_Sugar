import * as mongoose from "mongoose";
import * as uuid from "uuid";
import { prop, staticMethod, instanceMethod, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';
import {CollectedProducts} from "./collectedProducts";

export class UserRatings extends Typegoose{
   @prop({unique:true,default:uuid.v1()})
   _id:String;

   @prop({required:true})
   userOwnerId:String; 

   @prop({required:true})
   userRequesterId:String;
   
   @prop({required:true})
    productRequestedId:String; 
     
   @prop({default:0})
   rating:Number;
}
      
   const UserRatingsModel = new UserRatings().getModelForClass(UserRatings);

   export default UserRatingsModel;