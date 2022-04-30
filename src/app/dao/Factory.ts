import { Article } from './Article';
import { DummyFactory } from './DummyFactory';

export interface Factory {
    readonly userName: string;
    login(userName: string): boolean;
    logout(): void;
    getArticles(): Article[];
}
export const FactoryImpl: Factory = new DummyFactory();