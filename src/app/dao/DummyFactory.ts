import { Factory } from "./factory";
import { Article } from "./article";
import { Comment } from "./comment";

export class DummyFactory implements Factory {
    private _userName: string;
    constructor() {
        this._userName = "dummy username";
    }
    get userName() {
        return this._userName;
    }
    login(userName: string): boolean {
        this._userName = userName;
        return true;
    }
    logout(): void {
        this._userName = null;
    }
    getArticles(): Article[] {
        return [
            {
                name: "Composant 1",
                description: "Un joli composant",
                type: "other",
                score: 6,
                price: 59.99,
                favorite: false,
                comments: []
            },
            {
                name: "CPU 1",
                description: "Processeur",
                type: "cpu",
                score: 14,
                price: 249.99,
                favorite: true,
                comments: [
                    {
                        author: "Xx_D@rkSasuke_Du_57_xX",
                        rating: 4,
                        content: "bread 👍"
                    }
                ]
            },
            {
                name: "MOBO 1",
                description: "Carte mère",
                type: "motherboard",
                score: 18,
                price: 159.99,
                favorite: true,
                comments: []
            }
        ];
    }
}