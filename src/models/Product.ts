import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Comment } from "./Comment";
import { Rating } from "./Rating";

export class Product {
    private id: string;
    public name: string;
    public value: number;
    //add array de comentários dentro da classe produtos
    public comments: Comment[];
    //add array de avaliação dentro da classe produtos
    public rate: Rating[];

    constructor(name: string, value: number) {
        this.id = uuid();
        this.name = name;
        this.value = value;
        this.comments = [];
        this.rate = []
    }

    public show(): string {
        return ""
    }

    private showDetails(): string {
        return ""
    }

    public addComment(content: string, user: User) {
        const userId = user.getId()
        const comentario = new Comment(content, userId)
        this.comments.push(comentario)
        return this.comments
    }

    //criação da avaliação do produto
    public addRate(rate: number, user: User) {
        const userId = user.getId();
        const avaliacao = new Rating(rate, userId);
        this.rate.push(avaliacao);
        return this.rate
    }

    public getUserComments(user: User) {
        const usuario = user.getId();
        return this.comments.filter(comment => comment.userId === usuario)

    }

    public getId(): string {
        return this.id
    }
} 