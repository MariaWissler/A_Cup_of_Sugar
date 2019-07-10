import * as mongoose from "mongoose";
import * as uuid from "uuid";

const Schema = mongoose.Schema;

const usersSchema = new Schema ({
   id: {type:String, default: function createGuid(){uuid.v1()}, required:true },
   userName: {type:String, default:"", required:true},
   name:  {type:String, default:"", required:true },
   email: {type:String, default:"", required:true}
});

export default mongoose.model("Users", usersSchema);