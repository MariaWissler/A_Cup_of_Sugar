import UserRatingsModel from "../models/usersRatings";

export class UserRatingsController {
  static async createRating(request, response) {
   
    const {
      userOwnerId,
      userRequesterId,
      productRequestedId,
      rating
    } = request.body;

    if (!userOwnerId || !userRequesterId || !productRequestedId || !rating) {
      return response.status(422).send({
        message: "Users information and rating ins required"
      });
    }
    
    let newRating = new UserRatingsModel();
      newRating.userOwnerId = userOwnerId;
      newRating.userRequesterId = userRequesterId;
      newRating.productRequestedId = productRequestedId;
      newRating.rating = rating;
    
    try {
      await newRating.save();

      response.send({
        userOwnerId: newRating.userOwnerId,
        userRequesterId: newRating.userRequesterId,
        productRequestedId: newRating.productRequestedId,
        rating: newRating.rating

      });

    } catch (error) {
      console.log(error.message);
      response.status(500).send({
        message: "Server ecountered an error. Please try again"
      });
    }
  }

  static getRatings(request, response) {
    UserRatingsModel.find((error, ratings) => {
      if (error) {
        response.status(500).send("Ratings not Found");
      }
      response.json(ratings);
    });
  }

  static getRatingById(request, response) {
    var ratingId = request.params.id;

    UserRatingsModel.findById(ratingId, (error, ratingById) => {
      if (error) {
        response.status(500).send("Unable to find Rating");
      }
      response.status(200).json({ ratingById });
    });
  }

  static updateRating(request, response) {
    var ratingId = request.params.id;

    UserRatingsModel.findByIdAndUpdate(ratingId, request.body, (error, rating) => {
      if (error) {
        response.status(500).json("Unable to Update Rating");
      }
      response.status(200).json({ rating });
    });
  }

  static removeRating(request, response) {
    var ratingId = request.params.id;

    UserRatingsModel.findByIdAndRemove(ratingId, (error, ratingToRemove) => {
      if (error) {
        response.status(500).json("Unable to Remove Rating");
      }
      response.status(200).json({ ratingToRemove });
    });
  }
}
