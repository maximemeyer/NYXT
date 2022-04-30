import { Comment } from "./comment";

export class Article {
    public name: string;
    public description: string;
    public type: string;
    public score: number;
    public price: number;
    public favorite: boolean;
    public comments: Comment[];
}