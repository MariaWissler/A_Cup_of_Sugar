"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("../models/products");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.createProduct = function (request, response) {
        var addressId = request.body.addressId;
        var productName = request.body.productName;
        var productDescription = request.body.productDescription;
        var productImage = request.body.productImage;
        var availability = request.body.availability;
        // 422 client error 
        if (addressId == null || addressId == "") {
            return response.status(422).send('Address cant be empty');
        }
        if (productName == null || productName == "") {
            return response.status(422).send('Product Name cant be empty');
        }
        if (productDescription == null || productDescription == "") {
            return response.status(422).send('Product Description cant be empty');
        }
        if (productImage == null) { // string, how to validate an image ? 
            return response.status(422).send('We need an image to show to other users');
        }
        if (availability == null) { // string, how to validate an image ? 
            return response.status(422).send('Product needs to be available');
        }
        var newProduct = new products_1.default({
            addressId: addressId,
            productName: productName,
            productDescription: productDescription,
            productImage: productImage,
            availability: availability
        });
        newProduct.save(function (error, newProduct) {
            if (error) {
                response.status(500).send('Unable to create Product');
            }
            response.status(200).json({ newProduct: newProduct });
        });
    };
    ProductController.prototype.getProducts = function (request, response) {
        products_1.default.find(function (error, products) {
            if (error) {
                response.status(500).send('Product not Found');
            }
            response.json({ products: products });
        });
    };
    ProductController.prototype.getProductById = function (request, response) {
        var productId = request.params.id;
        products_1.default.findById(productId, function (error, product) {
            if (error) {
                response.status(500).send('Unable to find Product');
            }
            response.status(200).json({ product: product });
        });
    };
    ProductController.prototype.updateProduct = function (request, response) {
        var productId = request.params.id;
        products_1.default.findByIdAndUpdate(productId, request.body, function (error, product) {
            if (error) {
                response.status(500).json('Unable to Update Product Info');
            }
            response.status(200).json({ product: product });
        });
    };
    ProductController.prototype.removeProduct = function (request, response) {
        var productId = request.params.id;
        products_1.default.findByIdAndRemove(productId, function (error, productToRemove) {
            if (error) {
                response.status(500).json('Unable to Remove User');
            }
            response.status(200).json({ productToRemove: productToRemove });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=productController.js.map