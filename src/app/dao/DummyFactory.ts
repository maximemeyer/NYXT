import { Factory } from './factory';
import { Article } from './article';

export class DummyFactory implements Factory {
    private _userName: string;
    constructor() {
      // eslint-disable-next-line no-underscore-dangle
        this._userName = 'dummy username';
    }

  // @ts-ignore
  getArticleById(id: number): Article {
        for(const value of this.getArticles()) {
          // eslint-disable-next-line eqeqeq
          if (value.id == id) {
            return value;
          }
        }
    }

  // eslint-disable-next-line @typescript-eslint/member-ordering
    get userName() {
      // eslint-disable-next-line no-underscore-dangle
        return this._userName;
    }
    login(userName: string): boolean {
      // eslint-disable-next-line no-underscore-dangle
        this._userName = userName;
        return true;
    }
    logout(): void {
      // eslint-disable-next-line no-underscore-dangle
        this._userName = null;
    }
    getArticles(): Article[] {
        return [
            {
                id: 1,
                name: 'Composant 1',
                description: 'Un joli composant',
                type: 'other',
                score: 6,
                price: 59.99
            },
            {
                id: 2,
                name: 'CPU 1',
                description: 'Processeur',
                type: 'cpu',
                score: 14,
                price: 249.99
            },
            {
                id: 3,
                name: 'MOBO 1',
                description: 'Carte mère',
                type: 'motherboard',
                score: 18,
                price: 159.99
            }
        ];
    }
}
