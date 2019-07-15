import AddressModel from "../models/addresses";

export class AddressController{ // to do check how to import the google maps addresss
    static async createAddress(request, response){
      //   var userId = request.body.userId; // is this needed ? 
      //   var street = request.body.street;
      //   var streetNumber = request.body.streetNumber;
      //   var aptNumber = request.body.aptNumber;// this is not required how do we validate 
      //   var city = request.body.city;
      //   var zipCode = request.body.zipCode;
      //   var state = request.body.state;
      //   var country = request.body.country; // is this needed ? 
      
      //   // 422 client error 
      //  if(userId == null || userId == ""){ 
      //    return response.status(422).send('User cant be empty');
      //  }
 
      //  if(street == null || street == ""){
      //    return response.status(422).send('Street cant be empty');
      //  }
 
      //  if(streetNumber == null || streetNumber == ""){
      //    return response.status(422).send('Street Number cant be empty');
      //  }

      //  if(city == null || city == ""){
      //   return response.status(422).send('city cant be empty');
      // }

      // if(zipCode == null || zipCode == ""){
      //   return response.status(422).send('zipCode cant be empty');
      // }

      // if(state == null || state == ""){
      //   return response.status(422).send('state cant be empty');
      // }

      // if(country == null || country == ""){
      //   return response.status(422).send('Country cant be empty');
      // }
       // crear un nuevo Objeto 
       const {userId, street, streetNumber, aptNumber, city, zipCode, state, country} = request.body
       
       if (!userId || !street || !streetNumber || !city || !zipCode || !state || !country){
        return response.status(422).send({
          message: "Please provide full address details (userId, street, streetNumber, aptNumber, city, zipCode, state, country)"
        });
      }

       const newAddress = new AddressModel({
           userId,
           street,
           streetNumber,
           aptNumber,
           city,
           zipCode,
           state,
           country
       });

       await newAddress.save();

       response.send({
        userId: newAddress.userId,
        street: newAddress.street,
        streetNumber: newAddress.streetNumber,
        aptNumber: newAddress.aptNumber,
        city: newAddress.city,
        zipCode: newAddress.zipCode,
        state: newAddress.state,
        country: newAddress.country
       });


       
      //  //new user is object
      //  newAddress.save((error, newAddress)=>{
      //    if(error){
      //        response.status(500).send('Unable to save this address');
      //    }
      //    response.status(200).json({newAddress});
      //  });
 
       }

    public getAddress(request, response){
        addressTable.find((error, addresses) => {
            if(error){
                response.status(500).send('Address not Found');
            }
            response.json(addresses);
        });
    }

    public getAddressById(request, response){
        var addressId = request.params.id;
        AddressModel.findById(addressId,(error, address)=> {
        if(error){
            response.status(500).send('Unable to find Address');
        }
        response.status(200).json({address});
        });
   }
   
   public updateAddress(request, response){
        var addressId = request.params.id;

        AddressModel.findByIdAndUpdate(addressId, request.body,(error, address)=>{
            if(error){
                response.status(500).json('Unable to Update Address Info');
            }
            response.status(200).json({address});
        });
   }

   public removeAddress(request, response){
    var addressId  = request.params.id;

    AddressModel.findByIdAndRemove(addressId,(error, addressToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove User');
        }
        response.status(200).json({addressToRemove});
      });
   }

}

