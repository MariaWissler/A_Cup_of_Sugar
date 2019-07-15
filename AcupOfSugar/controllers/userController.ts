import UserModel from "../models/users";

export class UserController{

   static async createUser(request, response){
       const { userName, name, email } = request.body;
      
      if (!userName || !email || !name) {
          return response.status(422).send({
              message: 'Please provide email, username & name'
          })
      }

      const newUser = new UserModel({
          userName,
          email,
          name
      });

      await newUser.save();
      
      response.send({
          userName: newUser.userName,
          email: newUser.email,
          name: newUser.name,
          id: newUser.id
        });
    //   if(userName == null || userName == ""){
    //     return response.status(422).send('Username cant be empty');
    //   }

    //   if(name == null || name == ""){
    //     return response.status(422).send('User Name cant be empty');
    //   }

    //   if(email == null || email == ""){
    //     return response.status(422).send('User Email cant be empty');
    //   }
    //   // crear un nuevo Objeto 
    //   var newUser = new UserModel({
    //       userName,
    //       name,
    //       email
    //   });
      
    //   //new user is object
    //   newUser.save((error, newUser)=>{
    //     if(error){
    //         response.status(500).send('Unable to create user');
    //     }
    //     response.status(200).json({newUser});
    //   });

      }
   

    static getUsers(request, response){
        UserModel.find((error, users) => {
            if(error){
                response.status(500).send('Users not Found');
            }
            response.status(200).json({users});
        });
    }

    static getUserById(request, response){
        var userId = request.params.id;
        UserModel.findById(userId,(error, user)=> {
        if(error){
            response.status(500).send('Unable to find Id');
        }
        response.status(200).json({user});
        });
   }
   
   static updateUser(request, response){
        var userId = request.params.id;

        UserModel.findByIdAndUpdate(userId, request.body,(error, user)=>{
            if(error){
                response.status(500).json('Unable to Update User Info');
            }
            response.status(200).json({user});
        });
   }

   static removeUser(request, response){
    var userId = request.params.id;

    UserModel.findByIdAndRemove(userId,(error, userToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove User');
        }
        response.status(200).json({userToRemove});
    });
   }

}
