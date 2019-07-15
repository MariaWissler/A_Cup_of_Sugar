"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addresses_1 = require("../models/addresses");
var AddressController = /** @class */ (function () {
    function AddressController() {
    }
    AddressController.prototype.createAddress = function (request, response) {
        var userId = request.body.userId; // is this needed ? 
        var street = request.body.street;
        var streetNumber = request.body.streetNumber;
        var aptNumber = request.body.aptNumber; // this is not required how do we validate 
        var city = request.body.city;
        var zipCode = request.body.zipCode;
        var state = request.body.state;
        var country = request.body.country; // is this needed ? 
        // 422 client error 
        if (userId == null || userId == "") {
            return response.status(422).send('User cant be empty');
        }
        if (street == null || street == "") {
            return response.status(422).send('Street cant be empty');
        }
        if (streetNumber == null || streetNumber == "") {
            return response.status(422).send('Street Number cant be empty');
        }
        if (city == null || city == "") {
            return response.status(422).send('city cant be empty');
        }
        if (zipCode == null || zipCode == "") {
            return response.status(422).send('zipCode cant be empty');
        }
        if (state == null || state == "") {
            return response.status(422).send('state cant be empty');
        }
        if (country == null || country == "") {
            return response.status(422).send('Country cant be empty');
        }
        // crear un nuevo Objeto 
        var newAddress = new addresses_1.default({
            userId: userId,
            street: street,
            streetNumber: streetNumber,
            aptNumber: aptNumber,
            city: city,
            zipCode: zipCode,
            state: state,
            country: country
        });
        //new user is object
        newAddress.save(function (error, newAddress) {
            if (error) {
                response.status(500).send('Unable to save this address');
            }
            response.status(200).json({ newAddress: newAddress });
        });
    };
    AddressController.prototype.getAddress = function (request, response) {
        addresses_1.default.find(function (error, addresses) {
            if (error) {
                response.status(500).send('Address not Found');
            }
            response.json(addresses);
        });
    };
    AddressController.prototype.getAddressById = function (request, response) {
        var addressId = request.params.id;
        addresses_1.default.findById(addressId, function (error, address) {
            if (error) {
                response.status(500).send('Unable to find Address');
            }
            response.status(200).json({ address: address });
        });
    };
    AddressController.prototype.updateAddress = function (request, response) {
        var addressId = request.params.id;
        addresses_1.default.findByIdAndUpdate(addressId, request.body, function (error, address) {
            if (error) {
                response.status(500).json('Unable to Update Address Info');
            }
            response.status(200).json({ address: address });
        });
    };
    AddressController.prototype.removeAddress = function (request, response) {
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