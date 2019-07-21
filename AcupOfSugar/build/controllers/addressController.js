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
var addresses_1 = require("../models/addresses");
var AddressController = /** @class */ (function () {
    function AddressController() {
    }
    AddressController.createAddress = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _userId, street, intNumber, extNumber, neighborhood, zipCode, state, country, newAddress, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, _userId = _a._userId, street = _a.street, intNumber = _a.intNumber, extNumber = _a.extNumber, neighborhood = _a.neighborhood, zipCode = _a.zipCode, state = _a.state, country = _a.country;
                        if (!_userId || !street || !extNumber || !neighborhood || !zipCode || !state || !country) {
                            return [2 /*return*/, response.status(422).send({
                                    message: "Please provide full address details (userId, street, streetNumber, aptNumber, city, zipCode, state, country)"
                                })];
                        }
                        newAddress = new addresses_1.default();
                        newAddress._userId = _userId;
                        newAddress.street = street;
                        newAddress.intNumber = intNumber;
                        newAddress.extNumber = extNumber;
                        newAddress.neighborhood = neighborhood;
                        newAddress.zipCode = zipCode;
                        newAddress.state = state;
                        newAddress.country = country;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, newAddress.save()];
                    case 2:
                        _b.sent();
                        response.send({
                            _userId: newAddress._userId,
                            street: newAddress.street,
                            extNumber: newAddress.extNumber,
                            intNumber: newAddress.intNumber,
                            neighborhood: newAddress.neighborhood,
                            zipCode: newAddress.zipCode,
                            state: newAddress.state,
                            country: newAddress.country
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
    AddressController.getAddress = function (request, response) {
        addresses_1.default.find(function (error, addresses) {
            if (error) {
                response.status(500).send('Address not Found');
            }
            response.json(addresses);
        });
    };
    AddressController.getAddressById = function (request, response) {
        var addressId = request.params.id;
        addresses_1.default.findById(addressId, function (error, address) {
            if (error) {
                response.status(500).send('Unable to find Address');
            }
            response.status(200).json({ address: address });
        });
    };
    AddressController.updateAddress = function (request, response) {
        var addressId = request.params.id;
        addresses_1.default.findByIdAndUpdate(addressId, request.body, function (error, address) {
            if (error) {
                response.status(500).json('Unable to Update Address Info');
            }
            response.status(200).json({ address: address });
        });
    };
    AddressController.removeAddress = function (request, response) {
        var addressId = request.params.id;
        addresses_1.default.findByIdAndRemove(addressId, function (error, addressToRemove) {
            if (error) {
                response.status(500).json('Unable to Remove User');
            }
            response.status(200).json({ addressToRemove: addressToRemove });
        });
    };
    return AddressController;
}());
exports.AddressController = AddressController;
//# sourceMappingURL=addressController.js.map