import * as mongoose from "mongoose";
import * as uuid from "uuid";
import { prop, staticMethod, instanceMethod, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';
import {Products} from "./products";

export class CollectedProducts extends Typegoose{
//    @prop({unique:true,default:uuid.v1()})
// _id:String;

   @prop({required:true})
   productId:String;
   
   @prop({required:true})
    ownerId:String;

   @prop({required:true})
   requesterId:String;
    
   @prop({required:true})
   date:Date;

   @prop({required:true})
    collected:Boolean;
   }

   const CollectedProductsModel = new CollectedProducts().getModelForClass(CollectedProducts);
   
   export default CollectedProductsModel;