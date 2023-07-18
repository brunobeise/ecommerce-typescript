import { v4 as uuid } from "uuid";

export class Rating {
    private id: string;
    public rate: number;

    constructor(rate: number) {
        this.id = uuid();
        this.rate = rate;
    }

}