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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require("uuid");
var typegoose_1 = require("typegoose");
var UserRatings = /** @class */ (function (_super) {
    __extends(UserRatings, _super);
    function UserRatings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ unique: true, default: uuid.v1() }),
        __metadata("design:type", String)
    ], UserRatings.prototype, "_id", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], UserRatings.prototype, "userOwnerId", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], UserRatings.prototype, "userRequesterId", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], UserRatings.prototype, "productRequestedId", void 0);
    __decorate([
        typegoose_1.prop({ default: 0 }),
        __metadata("design:type", Number)
    ], UserRatings.prototype, "rating", void 0);
    return UserRatings;
}(typegoose_1.Typegoose));
exports.UserRatings = UserRatings;
var UserRatingsModel = new UserRatings().getModelForClass(UserRatings);
exports.default = UserRatingsModel;
//# sourceMappingURL=usersRatings.js.map