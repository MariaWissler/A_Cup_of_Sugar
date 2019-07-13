import userTable from "../models/users";

export class UserController{

   public createUser(request, response){
       var userName = request.body.userName;
       var name = request.body.name;
       var email = request.body.email;

      if(userName == null || userName == ""){
        return response.status(422).send('Username cant be empty');
      }

      if(name == null || name == ""){
        return response.status(422).send('User Name cant be empty');
      }

      if(email == null || email == ""){
        return response.status(422).send('User Email cant be empty');
      }
      // crear un nuevo Objeto 
      var newUser = new userTable({
          userName,
          name,
          email
      });
      
      //new user is object
      newUser.save((error, newUser)=>{
        if(error){
            response.status(500).send('Unable to create user');
        }
        response.status(200).json({newUser});
      });

      }
   

    public getUsers(request, response){
        userTable.find((error, users) => {
            if(error){
                response.status(500).send('Users not Found');
            }
            response.status(200).json({users});
        });
    }

    public getUserById(request, response){
        var userId = request.params.id;
        userTable.findById(userId,(error, user)=> {
        if(error){
            response.status(500).send('Unable to find Id');
        }
        response.status(200).json({user});
        });
   }
   
   public updateUser(request, response){
        var userId = request.params.id;

        userTable.findByIdAndUpdate(userId, request.body,(error, user)=>{
            if(error){
                response.status(500).json('Unable to Update User Info');
            }
            response.status(200).json({user});
        });
   }

   public removeUser(request, response){
    var userId = request.params.id;

    userTable.findByIdAndRemove(userId,(error, userToRemove)=>{
        if(error){
            response.status(500).json('Unable to Remove User');
        }
        response.status(200).json({userToRemove});
    });
   }

}
