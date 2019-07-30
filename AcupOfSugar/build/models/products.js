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
var typegoose_1 = require("typegoose");
var users_1 = require("./users");
var message_1 = require("./message");
var Products = /** @class */ (function (_super) {
    __extends(Products, _super);
    function Products() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Products.prototype, "addressId", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Products.prototype, "name", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Products.prototype, "description", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Boolean)
    ], Products.prototype, "availability", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Products.prototype, "image", void 0);
    __decorate([
        typegoose_1.prop({ ref: users_1.Users, required: true }),
        __metadata("design:type", Object)
    ], Products.prototype, "user", void 0);
    __decorate([
        typegoose_1.prop({ ref: users_1.Users }),
        __metadata("design:type", Object)
    ], Products.prototype, "requestedBy", void 0);
    __decorate([
        typegoose_1.prop({ ref: message_1.Message }),
        __metadata("design:type", Object)
    ], Products.prototype, "messages", void 0);
    return Products;
}(typegoose_1.Typegoose));
exports.Products = Products;
var ProductModel = new Products().getModelForClass(Products);
exports.default = ProductModel;
//# sourceMappingURL=products.js.map