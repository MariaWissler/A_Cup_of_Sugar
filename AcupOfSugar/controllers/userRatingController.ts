import ratingTable from "../models/usersrating";

export class RatingController{

   public createRating(request, response){
    var userOwnerId = request.body.userOwnerId;
    var userRequesterId = request.body.userRequesterId;
    var productRequestedId = request.body.productRequestedId;
    var rating = request.body.rating;
   // 422 client error 
   if(userOwnerId == null || userOwnerId == ""){
     return response.status(422).send('User Id cant be empty');
   }

   if(userRequesterId == null || userRequesterId == ""){
     return response.status(422).send('Requester Id cant be empty');
   }

   if(productRequestedId == null || productRequestedId == ""){
     return response.status(422).send('Product Id cant be empty');
   }

   if(rating == null || rating == ""){
    return response.status(422).send('Rating cant be empty'); // validate 
  }

   // crear un nuevo Objeto 
   var newRating = new ratingTable({
       userOwnerId,
       userRequesterId,
       productRequestedId,
       rating
   });
   
   //new user is object
   newRating.save((error, newRating)=>{
     if(error){
         response.status(500).send('Unable to create Rating');
     }
     response.status(200).json({newRating});
   });

   }

    public getRatings(request, response){
        ratingTable.find((error, ratings) => {
            if(error){
                response.status(500).send('Ratings not Found');
            }
            response.json(ratings);
        });
    }

    public getRatingById(request, response){
        var ratingId = request.params.id;

        ratingTable.findById(ratingId,(error, ratingById)=> {
        if(error){
            response.status(500).send('Unable to find Rating');
        }
        response.status(200).json({ratingById});
        });
   }
   
   public updateRating(request, response){
        var ratingId = request.params.id;

        ratingTable.findByIdAndUpdate(ratingId, request.body,(error, rating)=>{
            if(error){
                response.status(500).json('Unable to Update Rating');
            }
            response.status(200).json({rating});
        });
   }

   public removeRating(request, response){
        var ratingId = request.params.id;

        ratingTable.findByIdAndRemove(ratingId,(error, ratingToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove Rating');
        }
        response.status(200).json({ratingToRemove});
      });
   }
}