import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})


export class ConnectionPage implements OnInit {

  mail: string;
  password: string;

  constructor(private router: Router, private alertBox: AlertController) { }

  ngOnInit() {
  }


  login() {
    alert(this.mail + ' ' + this.password);
  }

  test(){
    axios.post('127.0.0.1:9876/api/utilisateur/authentification', {
        email: this.mail,
        mdp: this.password,
      }

      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ).then(function(response) {
      if(response.status===200){ // si il n'y a pas d'erreur
        // on sauvegarde l'utilisateur(response.data) dans le store
        // on va à l'accueil ou à la pge qui était demandé
      }

      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    }).catch(function(error) { // si il y a une erreur
      console.log(error);
      alert('Erreur Identifiant/Mot de passe inconnu');
    });
  }
}
