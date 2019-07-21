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
var Addresses = /** @class */ (function (_super) {
    __extends(Addresses, _super);
    function Addresses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ unique: true, default: uuid.v1() }),
        __metadata("design:type", String)
    ], Addresses.prototype, "_id", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Addresses.prototype, "_userId", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Addresses.prototype, "street", void 0);
    __decorate([
        typegoose_1.prop({ default: 0 }),
        __metadata("design:type", Number)
    ], Addresses.prototype, "intNumber", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Number)
    ], Addresses.prototype, "extNumber", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Addresses.prototype, "neighborhood", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Addresses.prototype, "zipCode", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Addresses.prototype, "state", void 0);
    __decorate([
        typegoose_1.prop({ default: "US" }),
        __metadata("design:type", String)
    ], Addresses.prototype, "country", void 0);
    return Addresses;
}(typegoose_1.Typegoose));
exports.Addresses = Addresses;
var AddressModel = new Addresses().getModelForClass(Addresses);
exports.default = AddressModel;
//# sourceMappingURL=addresses.js.map