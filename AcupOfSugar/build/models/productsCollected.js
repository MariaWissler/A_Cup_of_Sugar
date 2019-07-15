"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var Schema = mongoose.Schema;
var productsCollectedSchema = new Schema({
    id: {
        type: String,
        default: function createGuid() {
            return uuid.v1();
        }
    },
    productId: {
        type: String,
        ref: "Products",
        required: true
    },
    ownerId: {
        type: String,
        ref: "Users",
        required: true
    },
    requesterId: {
        type: String,
        ref: "Users",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    collected: {
        type: Boolean,
        default: false,
        required: true
    }
});
exports.default = mongoose.model("ProductsCollected", productsCollectedSchema);
//# sourceMappingURL=productsCollected.js.map