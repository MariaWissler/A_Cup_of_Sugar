import * as mongoose from "mongoose";
import * as uuid from "uuid";
import { prop, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';
import {Users} from "./users";

export class Addresses extends Typegoose{
   @prop({unique:true,default:uuid.v1()})
   _id:String;
   
   @prop({required:true})
   _userId:String;
   
   @prop({required:true})
   street:String;
   
   @prop({default:0})
   intNumber:Number;
   
   @prop({required:true})
   extNumber:Number;
   
   @prop({required:true})
   neighborhood:String;
   
   @prop({required:true})
   zipCode:String;
   
   @prop({required:true})
   state:String;
   
   @prop({default:"US"})
   country:String;
   }
   
   const AddressModel = new Addresses().getModelForClass(Addresses);
   
   export default AddressModel;