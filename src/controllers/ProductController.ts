import { products } from "../database";
import { validateDataProduct } from "../middlewares";
import { Product } from "../models/Product";

class ProductController {
    public add(data: any): Product | boolean {
        const validated = validateDataProduct(data);
        if(validated) {
            const newProduct = new Product(data.name, data.value);
            products.push(newProduct);
            return newProduct;
        }
    
        return false;
    }
    
    public remove(){

    }
    public list(){
        console.log(products);
    }
    public update(){

    }
}

export default new ProductController();