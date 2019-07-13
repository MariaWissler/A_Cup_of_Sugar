import * as mongoose from "mongoose";
import * as uuid from "uuid";

const Schema = mongoose.Schema;

const productsSchema = new Schema ({
   id: {
      type:String, 
      default: function createGuid(){
         return uuid.v1();
      }
   },
   addressId: { 
      type:String, 
      ref:"Addresses", 
      required:true
   },
   productName:  {
      type:String, 
      default:"", 
      required:true 
   },
   productDescription : {
      type:String, 
      default:"", 
      required:true
   },
   productImage: {
      type:Buffer, 
      required:true
   },
   availability: {
      type:Boolean, 
      default:false, 
      required:true
   }
});

export default mongoose.model("Products", productsSchema);