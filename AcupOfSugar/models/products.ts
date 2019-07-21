import * as mongoose from "mongoose";
import * as uuid from "uuid";
import { prop, staticMethod, instanceMethod, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';
import {Addresses} from "./addresses";

export class Products extends Typegoose{
@prop({unique:true,default:uuid.v1()})
_id:String;

@prop({required:true})
_addressId:String;

@prop({required:true})
name:String;

@prop({required:true})
description:String;

@prop({required:true})
availability:Boolean;

@prop({required:true})
image:Uint8Array;
}

const ProductModel = new Products().getModelForClass(Products);

export default ProductModel;

