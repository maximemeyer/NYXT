import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {ActivatedRoute} from '@angular/router';
import {FactoryImpl} from '../dao/Factory';
import {Comment} from '../dao/comment';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  id: number;
  title: string;
  description: string;
  price: number;
  type: string;
  score: number;
  favorite: boolean;
  comments: any[];


  constructor(private activatedRoute: ActivatedRoute) {
    // @ts-ignore
    this.id = this.activatedRoute.snapshot.paramMap.get('idArticle');
    console.log(this.id);
  }

  async ngOnInit() {
    //this.id=2;
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
    // const art = FactoryImpl.getArticleById(this.id);
    const context = this;
    let art = null;
    await axios.get('http://127.0.0.1:9876/api/produit/'+this.id).then(article => art = article.data);
    this.title = art.nom;
    this.description = art.description;
    this.type = art.type;
    this.score = art.score;
    this.price = art.prix;
    this.favorite = art.favorite;
    await axios.get('http://127.0.0.1:9876/api/commentaires/produit/'+this.id).then(commentaires=>context.comments=commentaires.data);
    this.comments.map(async com => {
      let author = '';
      await axios.get('http://127.0.0.1:9876/api/utilisateur/'+com.id_utilisateur).then(util=>{
        author=util.data.prenom;
      });
      com.author = author;
    });
  }

}
