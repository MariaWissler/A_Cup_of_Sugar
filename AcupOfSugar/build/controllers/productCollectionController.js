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
var collectedProducts_1 = require("../models/collectedProducts");
var CollectedProductsController = /** @class */ (function () {
    function CollectedProductsController() {
    }
    CollectedProductsController.createCollectedProduct = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, productId, ownerId, requesterId, date, collected, newProductCollected, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, productId = _a.productId, ownerId = _a.ownerId, requesterId = _a.requesterId, date = _a.date, collected = _a.collected;
                        if (!productId || !ownerId || !requesterId || !date || !collected) {
                            return [2 /*return*/, response.status(422).send({
                                    message: "Please provide all details for Collected Product"
                                })];
                        }
                        newProductCollected = new collectedProducts_1.default();
                        newProductCollected.productId = productId;
                        newProductCollected.ownerId = ownerId;
                        newProductCollected.requesterId = requesterId;
                        newProductCollected.date = date;
                        newProductCollected.collected = collected;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, newProductCollected.save()];
                    case 2:
                        _b.sent();
                        response.send({
                            productId: newProductCollected.productId,
                            ownerId: newProductCollected.ownerId,
                            requesterId: newProductCollected.requesterId,
                            date: newProductCollected.date,
                            collected: newProductCollected.collected
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1.message);
                        response.status(500).send({
                            message: 'Server ecountered an error. Please try again'
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CollectedProductsController.getCollectedProducts = function (request, response) {
        collectedProducts_1.default.find(function (error, collections) {
            if (error) {
                response.status(500).send("Collected Product not Found");
            }
            response.json(collections);
        });
    };
    CollectedProductsController.getCollectedProductById = function (request, response) {
        var collectedProductId = request.params.id;
        collectedProducts_1.default.findById(collectedProductId, function (error, collectedProductId) {
            if (error) {
                response.status(500).send("Unable to find Collected Product");
            }
            response.status(200).json({ collectedProductId: collectedProductId });
        });
    };
    CollectedProductsController.updateCollectedProduct = function (request, response) {
        var collectedProductId = request.params.id;
        collectedProducts_1.default.findByIdAndUpdate(collectedProductId, request.body, function (error, collectedProduct) {
            if (error) {
                response.status(500).json("Unable to Update Collected Product Info");
            }
            response.status(200).json({ collectedProduct: collectedProduct });
        });
    };
    CollectedProductsController.removeCollectedProduct = function (request, response) {
        var collectedProductId = request.params.id;
        collectedProducts_1.default.findByIdAndRemove(collectedProductId, function (error, collectedProductToRemove) {
            if (error) {
                response.status(500).json("Unable to Remove Collected Product");
            }
            response.status(200).json({ collectedProductToRemove: collectedProductToRemove });
        });
    };
    return CollectedProductsController;
}());
exports.CollectedProductsController = CollectedProductsController;
//# sourceMappingURL=productCollectionController.js.map