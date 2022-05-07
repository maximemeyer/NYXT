import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';

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


    test() {
        alert(this.mail + ' ' + this.password);
    }

    login() {
        const context = this;
        axios.post('http://127.0.0.1:9876/api/utilisateur/authentification', {
            email: this.mail,
            mdp: this.password,
        }

            // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        ).then(function (response) {
            if (response.status === 200) { // si il n'y a pas d'erreur
                //! context.store.dispatch(login());
                context.router.navigate(['detail-product']);

                // on sauvegarde l'utilisateur(response.data) dans le store
                // on va à l'accueil ou à la pge qui était demandé
            }
            // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        }).catch(function (error) { // si il y a une erreur
            console.log(error);
            alert('Erreur Identifiant/Mot de passe inconnu');
        });
    }

  forgot() {
    alert('Dommage');
  }
}
