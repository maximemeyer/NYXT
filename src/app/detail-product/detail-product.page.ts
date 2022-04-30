import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {ActivatedRoute} from '@angular/router';
import {FactoryImpl} from '../dao/Factory';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  score: number;
  favorite: boolean;
  comments: Comment[];


  constructor(private activatedRoute: ActivatedRoute) {
    //this.id = this.activatedRoute.snapshot.paramMap.get('idArticle');
  }

  ngOnInit() {
    //this.id='1';
    //axios.get('127.0.0.1:9876/api/utilisateur/detail-product/'+this.id
    //  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    //).then(function(response) {
    //  if(response.status===200){ // si il n'y a pas d'erreur
    //    // on affiche les données de l'article
    //  }
    //  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    //}).catch(function(error) { // si il y a une erreur
    //  //console.log(error);
    //  alert('Impossible de récupérer les données pour l\'article' + this.id);
    //});
    const art = FactoryImpl.getArticleById(2);
    this.comments = art.comments;
    this.title = art.name;
    this.description = art.description;
    this.type = art.type;
    this.score = art.score;
    this.price = art.price;
    this.favorite = art.favorite;
    //this.comments = art.comments;
  }

}
