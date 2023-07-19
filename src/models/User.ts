import { v4 as uuid } from "uuid";
import { Product } from "./Product";

export class User {
    private id: string;
    private cart: Product[];
    private name: string;
    private username: string;
    private email: string;

    constructor(nome: string, username: string, email: string) {
        this.id = uuid();
        this.cart = []
        this.name = nome;
        this.username = username;
        this.email = email;
    }

    public addToCart(product: Product): void {
        this.cart.push(product)
    }

    public removeFromCart(product: Product): void {
        const index = this.cart.findIndex(item => item.getId() === product.getId())
        if (index !== -1) {
            this.cart.splice(index, 1)
        } else {
            console.log(`Produto não encontrado.`)
        }

    }

    public showProduct(product: Product): string {
        return ""
    }

    public getId(): string {
        return this.id
    }
}

