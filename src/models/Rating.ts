import { v4 as uuid } from "uuid";

export class Rating {
    private id: string;
    public rate: number;
    public userId: string;

    constructor(rate: number, userId: string) {
        this.id = uuid();
        this.rate = rate;
        this.userId = userId;
    }

}