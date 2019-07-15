"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var Schema = mongoose.Schema;
var usersRatingSchema = new Schema({
    id: {
        type: String,
        default: function createGuid() {
            return uuid.v1();
        }
    },
    userOwnerId: {
        type: String,
        ref: "Users",
        required: true
    },
    userRequesterId: {
        type: String,
        ref: "Users",
        required: true
    },
    productRequestedId: {
        type: String,
        ref: "ProductsCollected",
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
});
exports.default = mongoose.model("UsersRating", usersRatingSchema);
//# sourceMappingURL=usersrating.js.map