import { Component } from '@angular/core';
import { Article } from '../dao/article';
import { FactoryImpl } from '../dao/factory';
import {Router} from '@angular/router';

@Component({
    selector: 'app-favorites',
    templateUrl: 'favorites.page.html',
    styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {

    articles: Article[];
    constructor(private router: Router) {
    }

    ionViewWillEnter() {
        this.articles = FactoryImpl.getArticles().filter(article => article.favorite);
    }

  getArticle(idArticle: number) {
    this.router.navigate(['detail-product', idArticle]);
  }
}
