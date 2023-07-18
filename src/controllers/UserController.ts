import { users } from "../database"
import validateDataUser from "../middlewares/validateDataUser"
import { Product } from "../models/Product";
import { User } from "../models/User";

class UserController{
    public add(data: any): User | boolean{
        const validated = validateDataUser(data);
        if(validated) {
            const newUser = new User(data.name, data.username, data.email);
            users.push(newUser);
            return newUser;
        } else {
            console.log("Dados inválidos");
            return false;
        }
    }

    public addToCart(user:User, product:Product) {
        user.addToCart(product);
    }

    public remove(){

    }
    public list(){
        console.log(users);
    }
    public update(){

    }
}

export default new UserController()