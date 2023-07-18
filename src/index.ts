import ProductController from "./controllers/ProductController";
import UserController from "./controllers/UserController";
import { validateDataUser } from "./middlewares";
import { Product } from "./models/Product";
import { User } from "./models/User";

const user1 = UserController.add({name:"Marcele", username:"marcele", email:"marcele@email.com"});
const product1 = ProductController.add({name: "Pizza", value: 45});

const dataUser = {name: "name"}
const validateTest = validateDataUser(dataUser);

console.log(validateTest);

UserController.addToCart(user1 as User, product1 as Product);

UserController.list();