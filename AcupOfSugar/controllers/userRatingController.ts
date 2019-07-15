import RatingModel from "../models/usersrating";

export class UserRatingController {
  static async createRating(request, response) {
    //   var userOwnerId = request.body.userOwnerId;
    //   var userRequesterId = request.body.userRequesterId;
    //   var productRequestedId = request.body.productRequestedId;
    //   var rating = request.body.rating;
    //  // 422 client error

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
    //  if(userOwnerId == null || userOwnerId == ""){
    //    return response.status(422).send('User Id cant be empty');
    //  }

    //  if(userRequesterId == null || userRequesterId == ""){
    //    return response.status(422).send('Requester Id cant be empty');
    //  }

    //  if(productRequestedId == null || productRequestedId == ""){
    //    return response.status(422).send('Product Id cant be empty');
    //  }

    //  if(rating == null || rating == ""){
    //   return response.status(422).send('Rating cant be empty'); // validate
    // }

    // crear un nuevo Objeto
    const newRating = new RatingModel({
      userOwnerId,
      userRequesterId,
      productRequestedId,
      rating
    });

    //new user is object

    await newRating.save();

    response.send({
      userOwnerId: newRating.userOwnerId,
      userRequesterId: newRating.userRequesterId,
      productRequestedId: newRating.productRequestedId,
      rating: newRating.rating
    });
  }

  static getRatings(request, response) {
    RatingModel.find((error, ratings) => {
      if (error) {
        response.status(500).send("Ratings not Found");
      }
      response.json(ratings);
    });
  }

  static getRatingById(request, response) {
    var ratingId = request.params.id;

    RatingModel.findById(ratingId, (error, ratingById) => {
      if (error) {
        response.status(500).send("Unable to find Rating");
      }
      response.status(200).json({ ratingById });
    });
  }

  static updateRating(request, response) {
    var ratingId = request.params.id;

    ratingModel.findByIdAndUpdate(ratingId, request.body, (error, rating) => {
      if (error) {
        response.status(500).json("Unable to Update Rating");
      }
      response.status(200).json({ rating });
    });
  }

  static removeRating(request, response) {
    var ratingId = request.params.id;

    RatingModel.findByIdAndRemove(ratingId, (error, ratingToRemove) => {
      if (error) {
        response.status(500).json("Unable to Remove Rating");
      }
      response.status(200).json({ ratingToRemove });
    });
  }
}
