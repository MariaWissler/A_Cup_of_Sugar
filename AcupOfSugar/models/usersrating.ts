import * as mongoose from "mongoose";
import * as uuid from "uuid";

const Schema = mongoose.Schema;

const usersRatingSchema = new Schema ({
   id: {
      type:String, 
      default: function createGuid(){
         return uuid.v1();
      }
   },
   userOwnerId: { 
      type:String, 
      ref:"Users",  
      required:true
   },
   userRequesterId : {
      type:String, 
      ref:"Users", 
      required:true
   },
   productRequestedId: {
      type:String, 
      ref: "ProductsCollected", 
      required:true
   },
   rating: {
      type:Number, 
      default:0
   }
});

export default mongoose.model("UsersRating", usersRatingSchema);