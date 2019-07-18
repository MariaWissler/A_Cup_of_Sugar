"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require("uuid");
var typegoose_1 = require("typegoose");
// //const Schema = mongoose.Schema;
// //const usersSchema = new Schema ({
//    id: {
//       type:String, 
//       default: function createGuid(){
//          return uuid.v1();
//        }
//       }, 
//    userName: {
//       type:String, 
//       default:"", 
//       required:true
//    },
//    name:  {
//       type:String,
//        default:"", 
//        required:true 
//       },
//    email: {
//       type:String, 
//       default:"", 
//       required:true
//    }
// });
// export default mongoose.model("Users", usersSchema);
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ unique: true, default: uuid.v1() })
    ], Users.prototype, "_id", void 0);
    __decorate([
        typegoose_1.prop({ required: true })
    ], Users.prototype, "userName", void 0);
    __decorate([
        typegoose_1.prop({ required: true })
    ], Users.prototype, "name", void 0);
    __decorate([
        typegoose_1.prop({ required: true })
    ], Users.prototype, "email", void 0);
    return Users;
}(typegoose_1.Typegoose));
exports.Users = Users;
//# sourceMappingURL=users.js.map