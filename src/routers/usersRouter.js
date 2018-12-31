import { UserService} from '../services/userService';
var express =require('express');



//api users
export class UsersRouter  {
    constructor(config) {
        this.config=config;
        this.userService = config.getService("UserService");

        if(!this.userService) throw Error("UserSwevice is not found");

    }

    build(){
        this.router = express.Router();

        this.router.route("/")
            .get(async(req,res,next)=>{
                var users= await this.userService.getUserAsync();
                res.json(users);
            });

        return this.router;    
    }
}