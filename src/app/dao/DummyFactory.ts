class DummyFactory implements Factory {
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
        return new Article[0];
    }

}