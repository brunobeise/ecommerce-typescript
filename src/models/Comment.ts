import { v4 as uuid } from "uuid";

export class Comment {
    private id: string;
    public content: string;
    public userId: string

    constructor(content: string, userId: string) {
        this.id = uuid();
        this.content = content;
        this.userId = userId
    }


}