import { FactoryImpl } from './../dao/factory';
import { Article } from './../dao/article';
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-components',
    templateUrl: 'components.page.html',
    styleUrls: ['components.page.scss']
})
export class ComponentsPage {

    articles: Article[];
    constructor(private router: Router) {
    }

    ionViewWillEnter() {
        this.articles = FactoryImpl.getArticles();
    }

  getArticle(idArticle: number) {
    console.log('dedans');
    // @ts-ignore
    this.router.navigate(['detail-product', idArticle]);
  }
}
