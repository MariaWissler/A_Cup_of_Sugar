"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productsCollected_1 = require("../models/productsCollected");
var ProductCollectionController = /** @class */ (function () {
    function ProductCollectionController() {
    }
    ProductCollectionController.prototype.createProductCollected = function (request, response) {
        var productId = request.body.productId;
        var ownerId = request.body.ownerId;
        var requesterId = request.body.requesterId;
        var date = request.body.date;
        var collected = request.body.collected;
        // 422 client error 
        if (productId == null || productId == "") {
            return response.status(422).send('Product Id cant be empty');
        }
        if (ownerId == null || ownerId == "") {
            return response.status(422).send('Owner Id cant be empty');
        }
        if (requesterId == null || requesterId == "") {
            return response.status(422).send('Requester Id cant be empty');
        }
        if (date == null) {
            return response.status(422).send('We need a valid Date');
        }
        if (collected == null) { // string, how to validate an image ? 
            return response.status(422).send('Product needs to be collected to be on the records');
        }
        var newProductCollected = new productsCollected_1.default({
            productId: productId,
            ownerId: ownerId,
            requesterId: requesterId,
            date: date,
            collected: collected,
        });
        newProductCollected.save(function (error, newProductCollected) {
            if (error) {
                response.status(500).send('Unable to save Status for this Product');
            }
            response.status(200).json({ newProductCollected: newProductCollected });
        });
    };
    ProductCollectionController.prototype.getCollectedProducts = function (request, response) {
        productsCollected_1.default.find(function (error, collections) {
            if (error) {
                response.status(500).send('Collected Product not Found');
            }
            response.json(collections);
        });
    };
    ProductCollectionController.prototype.getCollectedProductById = function (request, response) {
        var collectedProductId = request.params.id;
        productsCollected_1.default.findById(collectedProductId, function (error, collectedProductId) {
            if (error) {
                response.status(500).send('Unable to find Collected Product');
            }
            response.status(200).json({ collectedProductId: collectedProductId });
        });
    };
    ProductCollectionController.prototype.updateCollectedProduct = function (request, response) {
        var collectedProductId = request.params.id;
        productsCollected_1.default.findByIdAndUpdate(collectedProductId, request.body, function (error, collectedProduct) {
            if (error) {
                response.status(500).json('Unable to Update Collected Product Info');
            }
            response.status(200).json({ collectedProduct: collectedProduct });
        });
    };
    ProductCollectionController.prototype.removeCollectedProduct = function (request, response) {
        var collectedProductId = request.params.id;
        productsCollected_1.default.findByIdAndRemove(collectedProductId, function (error, collectedProductToRemove) {
            if (error) {
                response.status(500).json('Unable to Remove Collected Product');
            }
            response.status(200).json({ collectedProductToRemove: collectedProductToRemove });
        });
    };
    return ProductCollectionController;
}());
exports.ProductCollectionController = ProductCollectionController;
//# sourceMappingURL=productCollectionController.js.map