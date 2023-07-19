import ProductController from "./controllers/ProductController";
import UserController from "./controllers/UserController";
import { validateDataUser } from "./middlewares";
import { Product } from "./models/Product";
import { User } from "./models/User";

const user = UserController.add({ name: "Marcele", username: "marcele", email: "marcele@email.com" });
const user2 = UserController.add({ name: "Marcele", username: "marcele", email: "marcele@email.com" });
const pizza = ProductController.add({ name: "Pizza", value: 45 });


pizza?.addComment("comentario do everton", user!)

console.log(pizza?.addComment("comentario 2 do everton", user!));

console.log(pizza?.addRate(4.2, user!));

console.log(pizza?.getUserComments(user2!));


