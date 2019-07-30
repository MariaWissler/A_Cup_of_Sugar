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
var products_1 = require("../models/products");
var users_1 = require("../models/users");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.createProduct = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var file, _a, addressId, name, description, availability, userId, user, newProduct, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        file = request.file;
                        _a = request.body, addressId = _a.addressId, name = _a.name, description = _a.description, availability = _a.availability, userId = _a.userId;
                        console.log(request.body);
                        if (!addressId || !name || !description || !availability || !userId) {
                            return [2 /*return*/, response.status(400).send({
                                    message: "Please provide complete product details"
                                })];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, users_1.default.findById(userId)];
                    case 2:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, response.status(404).json({
                                    message: "User with ID '" + userId + "' not found"
                                })];
                        }
                        newProduct = new products_1.default({
                            addressId: addressId,
                            name: name,
                            description: description,
                            availability: availability,
                            image: file.path,
                            user: user
                        });
                        return [4 /*yield*/, newProduct.save()];
                    case 3:
                        _b.sent();
                        response.send({
                            addressId: newProduct.addressId,
                            name: newProduct.name,
                            description: newProduct.description,
                            image: newProduct.image,
                            availability: newProduct.availability
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.log(error_1.message);
                        response.status(500).send({
                            message: "Server ecountered an error. Please try again"
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.getProducts = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var products, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, products_1.default.find({ availability: true }).populate("messages")];
                    case 1:
                        products = _a.sent();
                        response.json({ products: products });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        response.status(500).send("Products not found");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.getProductById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productId, product, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, products_1.default.findById(productId).populate("user", "messages")];
                    case 2:
                        product = _a.sent();
                        response.json({ product: product });
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        response.status(500).send("Unable to find Product");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.updateProduct = function (request, response) {
        var productId = request.params.id;
        products_1.default.findByIdAndUpdate(productId, request.body, function (error, product) {
            if (error) {
                response.status(500).json("Unable to Update Product Info");
            }
            response.status(200).json({ product: product });
        });
    };
    ProductController.removeProduct = function (request, response) {
        var productId = request.params.id;
        products_1.default.findByIdAndRemove(productId, function (error, productToRemove) {
            if (error) {
                response.status(500).json("Unable to Remove User");
            }
            response.status(200).json({ productToRemove: productToRemove });
        });
    };
    ProductController.addRequest = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productId, userId, user, product, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = request.params.id;
                        userId = request.body.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, users_1.default.findById(userId)];
                    case 2:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, response.status(404).json({
                                    message: "User with ID '" + userId + "' not found"
                                })];
                        }
                        return [4 /*yield*/, products_1.default.findById(productId)];
                    case 3:
                        product = _a.sent();
                        if (!product) {
                            return [2 /*return*/, response.status(404).json({
                                    message: "Product with ID '" + productId + "' not found"
                                })];
                        }
                        product.availability = false;
                        product.requestedBy = user;
                        return [4 /*yield*/, product.save()];
                    case 4:
                        _a.sent();
                        response.send({ message: "Request added successfull" });
                        return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        response.status(500).json({
                            message: error_4.message
                        });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.getRequestedProducts = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, currentUserProducts, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, products_1.default.find({ userId: userId, availability: false })];
                    case 2:
                        currentUserProducts = _a.sent();
                        return [2 /*return*/, response.json({ currentUserProducts: currentUserProducts })];
                    case 3:
                        error_5 = _a.sent();
                        response.status(500).send("Products not found");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=productController.js.map