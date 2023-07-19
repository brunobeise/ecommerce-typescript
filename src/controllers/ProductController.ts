import { products } from "../database";
import { validateDataProduct } from "../middlewares";
import { Product } from "../models/Product";

class ProductController {
    public add(data: any): Product | undefined {
        const validated = validateDataProduct(data);
        if (validated) {
            console.log("criou");

            const newProduct = new Product(data.name, data.value);
            products.push(newProduct);
            return newProduct;
        }

        return undefined;
    }

    public remove() {

    }
    public list() {
        console.log(products);
    }
    public update() {

    }
}

export default new ProductController();