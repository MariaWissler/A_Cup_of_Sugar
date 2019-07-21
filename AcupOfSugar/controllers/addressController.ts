import AddressModel from "../models/addresses";

export class AddressController{ // to do check how to import the google maps addresss
    static async createAddress(request, response){
      
       const {_userId, street, intNumber, extNumber, neighborhood, zipCode, state, country} = request.body;
       
       if (!_userId || !street || !extNumber || !neighborhood || !zipCode || !state || !country){
        return response.status(422).send({
          message: "Please provide full address details (userId, street, streetNumber, aptNumber, city, zipCode, state, country)"
        });
      }

      let newAddress = new AddressModel();
      newAddress._userId=_userId;
      newAddress.street=street;
      newAddress.intNumber = intNumber;
      newAddress.extNumber= extNumber;
      newAddress.neighborhood = neighborhood;
      newAddress.zipCode= zipCode;
      newAddress.state=state;
      newAddress.country = country;

       try {
       await newAddress.save();

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

       } catch (error) {
        console.log(error.message);
        response.status(500).send({
          message: 'Server ecountered an error. Please try again'
        })
      }

       
      //  //new user is object
      //  newAddress.save((error, newAddress)=>{
      //    if(error){
      //        response.status(500).send('Unable to save this address');
      //    }
      //    response.status(200).json({newAddress});
      //  });
 
       }

    static getAddress(request, response){
      AddressModel.find((error, addresses) => {
            if(error){
                response.status(500).send('Address not Found');
            }
            response.json(addresses);
        });
    }

    static getAddressById(request, response){
        var addressId = request.params.id;
        AddressModel.findById(addressId,(error, address)=> {
        if(error){
            response.status(500).send('Unable to find Address');
        }
        response.status(200).json({address});
        });
   }
   
   static updateAddress(request, response){
        var addressId = request.params.id;

        AddressModel.findByIdAndUpdate(addressId, request.body,(error, address)=>{
            if(error){
                response.status(500).json('Unable to Update Address Info');
            }
            response.status(200).json({address});
        });
   }

   static removeAddress(request, response){
    var addressId  = request.params.id;

    AddressModel.findByIdAndRemove(addressId,(error, addressToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove User');
        }
        response.status(200).json({addressToRemove});
      });
   }

}

