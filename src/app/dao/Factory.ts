import { Article } from './article';
import { DummyFactory } from './dummyFactory';

export interface Factory {
    readonly userName: string;
    login(userName: string): boolean;
    logout(): void;
    getArticles(): Article[];
}
export const FactoryImpl: Factory = new DummyFactory();