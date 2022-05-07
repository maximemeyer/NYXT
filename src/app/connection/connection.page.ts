import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';
import { Store } from '@ngrx/store';
// import { FactoryImpl} from '../dao/Factory';
import { login } from '../store/utilisateur.action';
@Component({
    selector: 'app-connection',
    templateUrl: './connection.page.html',
    styleUrls: ['./connection.page.scss'],
})


export class ConnectionPage implements OnInit {

    mail: string;
    password: string;

    constructor(private router: Router, private alertBox: AlertController,private store: Store<{ utilisateur: string }>) { }

    ngOnInit() {
    }

    login() {
        const context = this;
        axios.post('http://127.0.0.1:9876/api/utilisateur/authentification', {
            email: this.mail,
            mdp: this.password,
        }).then(function (response) {
            if (response.status === 200) { // si il n'y a pas d'erreur
                console.log(response.data);
                context.store.dispatch(login(response.data));
                context.router.navigate(['tabs']);
            }
        }).catch(function (error) { // si il y a une erreur
            console.log(error);
            alert('Erreur Identifiant/Mot de passe inconnu');
        });
    }

  forgot() {
    alert('Dommage');
  }
}
