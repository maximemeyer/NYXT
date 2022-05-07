import { Component } from '@angular/core';
import { Article } from '../dao/article';
import { FactoryImpl } from '../dao/factory';

@Component({
    selector: 'app-favorites',
    templateUrl: 'favorites.page.html',
    styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {

    articles: Article[];
    constructor() {
    }

    ionViewWillEnter() {
        this.articles = FactoryImpl.getArticles().filter(article => article.favorite);
    }
}
