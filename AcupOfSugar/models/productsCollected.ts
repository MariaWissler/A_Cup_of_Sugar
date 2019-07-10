import * as mongoose from "mongoose";
import * as uuid from "uuid";

const Schema = mongoose.Schema;

const productsCollectedSchema = new Schema ({
   id: {type:String, default: function createGuid(){uuid.v1()}, required:true },
   productId: {type:String, ref: "Products", required:true},
   ownerId:  {type:String, ref: "Users", required:true },
   requesterId : {type:String, ref: "Users", required:true},
   date: {type:Date, required:true},
   collected:{type:Boolean, default:false, required:true}
});

export default mongoose.model("ProductsCollected", productsCollectedSchema);