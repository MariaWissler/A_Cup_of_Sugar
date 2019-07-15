"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var Schema = mongoose.Schema;
var productsSchema = new Schema({
    id: {
        type: String,
        default: function createGuid() {
            return uuid.v1();
        }
    },
    addressId: {
        type: String,
        ref: "Addresses",
        required: true
    },
    productName: {
        type: String,
        default: "",
        required: true
    },
    productDescription: {
        type: String,
        default: "",
        required: true
    },
    productImage: {
        type: Buffer,
        required: true
    },
    availability: {
        type: Boolean,
        default: false,
        required: true
    }
});
exports.default = mongoose.model("Products", productsSchema);
//# sourceMappingURL=products.js.map