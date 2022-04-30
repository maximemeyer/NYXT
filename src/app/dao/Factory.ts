interface Factory {
    userName: string;
    login(userName: string): boolean;
    logout(): void;
    getArticles(): Article[];
}
const factory: Factory = new DummyFactory();