import { FactoryImpl } from './../dao/factory';
import { Article } from './../dao/article';
import { Component } from '@angular/core';

@Component({
    selector: 'app-components',
    templateUrl: 'components.page.html',
    styleUrls: ['components.page.scss']
})
export class ComponentsPage {

    articles: Article[];
    constructor() {
    }

    ionViewWillEnter() {
        this.articles = FactoryImpl.getArticles();
    }
}
