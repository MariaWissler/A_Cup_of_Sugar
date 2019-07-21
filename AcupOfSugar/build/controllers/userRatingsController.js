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
var usersRatings_1 = require("../models/usersRatings");
var UserRatingsController = /** @class */ (function () {
    function UserRatingsController() {
    }
    UserRatingsController.createRating = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userOwnerId, userRequesterId, productRequestedId, rating, newRating, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, userOwnerId = _a.userOwnerId, userRequesterId = _a.userRequesterId, productRequestedId = _a.productRequestedId, rating = _a.rating;
                        if (!userOwnerId || !userRequesterId || !productRequestedId || !rating) {
                            return [2 /*return*/, response.status(422).send({
                                    message: "Users information and rating ins required"
                                })];
                        }
                        newRating = new usersRatings_1.default();
                        newRating.userOwnerId = userOwnerId;
                        newRating.userRequesterId = userRequesterId;
                        newRating.productRequestedId = productRequestedId;
                        newRating.rating = rating;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, newRating.save()];
                    case 2:
                        _b.sent();
                        response.send({
                            userOwnerId: newRating.userOwnerId,
                            userRequesterId: newRating.userRequesterId,
                            productRequestedId: newRating.productRequestedId,
                            rating: newRating.rating
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1.message);
                        response.status(500).send({
                            message: "Server ecountered an error. Please try again"
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserRatingsController.getRatings = function (request, response) {
        usersRatings_1.default.find(function (error, ratings) {
            if (error) {
                response.status(500).send("Ratings not Found");
            }
            response.json(ratings);
        });
    };
    UserRatingsController.getRatingById = function (request, response) {
        var ratingId = request.params.id;
        usersRatings_1.default.findById(ratingId, function (error, ratingById) {
            if (error) {
                response.status(500).send("Unable to find Rating");
            }
            response.status(200).json({ ratingById: ratingById });
        });
    };
    UserRatingsController.updateRating = function (request, response) {
        var ratingId = request.params.id;
        usersRatings_1.default.findByIdAndUpdate(ratingId, request.body, function (error, rating) {
            if (error) {
                response.status(500).json("Unable to Update Rating");
            }
            response.status(200).json({ rating: rating });
        });
    };
    UserRatingsController.removeRating = function (request, response) {
        var ratingId = request.params.id;
        usersRatings_1.default.findByIdAndRemove(ratingId, function (error, ratingToRemove) {
            if (error) {
                response.status(500).json("Unable to Remove Rating");
            }
            response.status(200).json({ ratingToRemove: ratingToRemove });
        });
    };
    return UserRatingsController;
}());
exports.UserRatingsController = UserRatingsController;
//# sourceMappingURL=userRatingsController.js.map