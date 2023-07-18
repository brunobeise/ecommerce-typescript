import { v4 as uuid } from "uuid";
import { User } from "./User";

export class Product {
    private id: string;
    public name: string;
    public value: number;

    constructor(name: string, value: number) {
        this.id = uuid();
        this.name = name;
        this.value = value;
    }

    public show(): string {
        return ""
    }

    private showDetails(): string {
        return ""
    }

    public addComment(comment: string, user: User): void {

    }

    public addRate(rate: number, user: User): void {

    }

    public getId():string{
        return this.id
    }
} 