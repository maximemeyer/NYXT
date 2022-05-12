import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {ActivatedRoute, Router} from '@angular/router';
import {FactoryImpl} from '../dao/Factory';
import {Comment} from '../dao/comment';
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
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

  utilisateur$: any;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private store: Store<{ utilisateur: any }>) {
    // @ts-ignore
    this.id = this.activatedRoute.snapshot.paramMap.get('idArticle');
    console.log(this.id);
  }

  async delFav(){
    const context = this;
    await axios.delete('http://127.0.0.1:9876/api/favoris/'+context.id+'/'+context.utilisateur$.id).then(()=>context.isFav());
  }
  async ajouteFav(){
    const context = this;
    await axios.post('http://127.0.0.1:9876/api/favoris',
      {
        id_produit:context.id,
        id_util:context.utilisateur$.id
      }).then(()=>context.isFav());
  }
  async isFav(){
    const context = this;
    this.favorite = false;
    await axios.get('http://127.0.0.1:9876/api/favoris/' + context.utilisateur$.id).then((favoris) => {
      favoris.data.forEach(favo=>{
        if(context.id==favo.id_produit){
          context.favorite = true;
        }
      });
    });
  }
  async ngOnInit() {
    const context = this;
    await this.store.pipe().subscribe(
      (data: any) => {
        this.utilisateur$ = data.utilisateur;
      });
    let art = null;
    await axios.get('http://127.0.0.1:9876/api/produit/'+this.id).then(article => art = article.data);
    this.title = art.nom;
    this.description = art.description;
    this.type = art.type;
    this.score = art.score;
    this.price = art.prix;
    await axios.get('http://127.0.0.1:9876/api/commentaires/produit/'+this.id).then(commentaires=>context.comments=commentaires.data);
    await this.isFav();
    this.comments.map(async com => {
      let author = '';
      await axios.get('http://127.0.0.1:9876/api/utilisateur/'+com.id_utilisateur).then(util=>{
        author=util.data.prenom;
      });
      com.author = author;
    });
  }

}
