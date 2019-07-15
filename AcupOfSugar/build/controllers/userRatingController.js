"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersrating_1 = require("../models/usersrating");
var UserRatingController = /** @class */ (function () {
    function UserRatingController() {
    }
    UserRatingController.prototype.createRating = function (request, response) {
        var userOwnerId = request.body.userOwnerId;
        var userRequesterId = request.body.userRequesterId;
        var productRequestedId = request.body.productRequestedId;
        var rating = request.body.rating;
        // 422 client error 
        if (userOwnerId == null || userOwnerId == "") {
            return response.status(422).send('User Id cant be empty');
        }
        if (userRequesterId == null || userRequesterId == "") {
            return response.status(422).send('Requester Id cant be empty');
        }
        if (productRequestedId == null || productRequestedId == "") {
            return response.status(422).send('Product Id cant be empty');
        }
        if (rating == null || rating == "") {
            return response.status(422).send('Rating cant be empty'); // validate 
        }
        // crear un nuevo Objeto 
        var newRating = new usersrating_1.default({
            userOwnerId: userOwnerId,
            userRequesterId: userRequesterId,
            productRequestedId: productRequestedId,
            rating: rating
        });
        //new user is object
        newRating.save(function (error, newRating) {
            if (error) {
                response.status(500).send('Unable to create Rating');
            }
            response.status(200).json({ newRating: newRating });
        });
    };
    UserRatingController.prototype.getRatings = function (request, response) {
        usersrating_1.default.find(function (error, ratings) {
            if (error) {
                response.status(500).send('Ratings not Found');
            }
            response.json(ratings);
        });
    };
    UserRatingController.prototype.getRatingById = function (request, response) {
        var ratingId = request.params.id;
        usersrating_1.default.findById(ratingId, function (error, ratingById) {
            if (error) {
                response.status(500).send('Unable to find Rating');
            }
            response.status(200).json({ ratingById: ratingById });
        });
    };
    UserRatingController.prototype.updateRating = function (request, response) {
        var ratingId = request.params.id;
        usersrating_1.default.findByIdAndUpdate(ratingId, request.body, function (error, rating) {
            if (error) {
                response.status(500).json('Unable to Update Rating');
            }
            response.status(200).json({ rating: rating });
        });
    };
    UserRatingController.prototype.removeRating = function (request, response) {
        var ratingId = request.params.id;
        usersrating_1.default.findByIdAndRemove(ratingId, function (error, ratingToRemove) {
            if (error) {
                response.status(500).json('Unable to Remove Rating');
            }
            response.status(200).json({ ratingToRemove: ratingToRemove });
        });
    };
    return UserRatingController;
}());
exports.UserRatingController = UserRatingController;
//# sourceMappingURL=userRatingController.js.map