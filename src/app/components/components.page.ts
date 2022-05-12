import { FactoryImpl } from './../dao/factory';
import { Article } from './../dao/article';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import axios from "axios";

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
        // this.articles = FactoryImpl.getArticles();
      axios.get('http://127.0.0.1:9876/api/produit').then(response=>this.articles=response.data);
    }

  getArticle(idArticle: number) {
    console.log('dedans');
    // @ts-ignore
    this.router.navigate(['detail-product', idArticle]);
  }
}
