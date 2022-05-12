import { Component } from '@angular/core';
import { Article } from '../dao/article';
import { FactoryImpl } from '../dao/factory';
import {Router} from '@angular/router';
import axios from "axios";
import { Store } from '@ngrx/store';

import {Observable} from "rxjs";

@Component({
    selector: 'app-favorites',
    templateUrl: 'favorites.page.html',
    styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {

  utilisateur$: Observable<string>;
  articles: Article[];
  constructor(private router: Router,private store: Store<{ utilisateur: any }>) {
  }

  async ionViewWillEnter() {
    // this.articles = FactoryImpl.getArticles().filter(article => article.favorite);
    let copyArticle = [];
    this.store.pipe().subscribe(
      async (data: any) => {
        await axios.get('http://127.0.0.1:9876/api/favoris/' + data.utilisateur.id).then((response) => {
          response.data.forEach(async res => {
            await axios.get('http://127.0.0.1:9876/api/produit/' + res.id_produit).then(article => {
              copyArticle.push(article.data);
            });
          });
        });
      });
    this.articles=copyArticle;
  }

  getArticle(idArticle: number) {
    this.router.navigate(['detail-product', idArticle]);
  }
}
