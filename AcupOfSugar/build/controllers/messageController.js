"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("../models/message");
var users_1 = require("../models/users");
var products_1 = require("../models/products");
var MessageController = /** @class */ (function () {
    function MessageController() {
    }
    MessageController.send = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, from, to, body, productId, sender, recipient, product, message, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, from = _a.from, to = _a.to, body = _a.body, productId = _a.productId;
                        if (!from || !to || !body || !productId) {
                            return [2 /*return*/, response.status(400).json({
                                    message: "Please provide 'from, to, body, productId' in request"
                                })];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, users_1.default.findById(from)];
                    case 2:
                        sender = _b.sent();
                        return [4 /*yield*/, users_1.default.findById(to)];
                    case 3:
                        recipient = _b.sent();
                        return [4 /*yield*/, products_1.default.findById(productId)];
                    case 4:
                        product = _b.sent();
                        message = message_1.default().populate("productChat");
                        message.body = body;
                        message.from = sender;
                        message.to = recipient;
                        message.product = product;
                        console.log('message.product', message.product);
                        return [4 /*yield*/, message.save()];
                    case 5:
                        _b.sent();
                        sender.messages.push(message);
                        recipient.messages.push(message);
                        return [4 /*yield*/, sender.save()];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, recipient.save()];
                    case 7:
                        _b.sent();
                        response.send({
                            message: "Message sent successfully"
                        });
                        return [3 /*break*/, 9];
                    case 8:
                        error_1 = _b.sent();
                        console.log(error_1.message);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    MessageController.getMesssagesByProduct = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productId, messageByProduct, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, message_1.default.find({ product: productId })];
                    case 2:
                        messageByProduct = _a.sent();
                        if (!messageByProduct) {
                            return [2 /*return*/, response.status(404).json({
                                    messageByProduct: "not found"
                                })];
                        }
                        messageByProduct.isRead = true;
                        response.send(messageByProduct);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        response.status(500).json({
                            message: 'Failed to get messages'
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return MessageController;
}());
exports.MessageController = MessageController;
//# sourceMappingURL=messageController.js.map