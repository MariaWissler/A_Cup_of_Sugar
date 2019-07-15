"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    id: {
        type: String,
        default: function createGuid() {
            return uuid.v1();
        }
    },
    userName: {
        type: String,
        default: "",
        required: true
    },
    name: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true
    }
});
exports.default = mongoose.model("Users", usersSchema);
//# sourceMappingURL=users.js.map