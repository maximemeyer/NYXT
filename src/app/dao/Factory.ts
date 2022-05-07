import { Article } from './article';
import { DummyFactory } from './dummyFactory';

export interface Factory {
    readonly userName: string;
    login(userName: string): boolean;
    logout(): void;
    getArticles(): Article[];
    getArticleById(id: number);
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FactoryImpl: Factory = new DummyFactory();
