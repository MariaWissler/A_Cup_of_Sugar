"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var Schema = mongoose.Schema;
var addressesSchema = new Schema({
    id: {
        type: String,
        default: function createGuid() {
            return uuid.v1();
        }
    },
    userId: {
        type: String,
        ref: "Users",
        required: true
    },
    street: {
        type: String,
        default: "",
        required: true
    },
    streetNumber: {
        type: Number,
        default: 0,
        required: true
    },
    aptNumber: {
        type: Number,
        default: 0
    },
    city: {
        type: String,
        default: "",
        required: true
    },
    zipCode: {
        type: String,
        default: "",
        required: true
    },
    state: {
        type: String,
        default: "",
        required: true
    },
    country: {
        type: String,
        default: "US",
        required: true
    }
});
exports.default = mongoose.model("Addresses", addressesSchema);
//# sourceMappingURL=addresses.js.map