import { v4 as uuid } from "uuid";

export class Comment {
    private id: string;
    public content: string;

    constructor(content: string) {
        this.id = uuid();
        this.content = content;
    }
}