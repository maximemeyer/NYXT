import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import axios from 'axios';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    nom: string;
    prenom: string;
    email: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
    date_naissance: Date;
    mdp: string;
    confirmPwd: string;
    errorMessage = '';
    hasErrors = false;
    constructor(private router: Router, private alertBox: AlertController) { }

    ngOnInit() {
    }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  RegisterUser() {
    this.errorMessage = '';
    this.hasErrors = false;
    if (this.nom == null) {
      this.errorMessage += '- Nom non fournis'+'\n';
      this.hasErrors = true;
    }

    if (this.prenom == null) {
      this.errorMessage += '- Prénom non fournis \n';
      this.hasErrors = true;
    }

    if (this.email == null) {
      this.errorMessage += '- Email non fournis \n';
      this.hasErrors = true;
    }

    if (this.mdp == null) {
      this.errorMessage += '- Mot de passe non fournis \n';
      this.hasErrors = true;
    }

    if (this.confirmPwd == null) {
      this.errorMessage += '- Vous n\'avez pas confirmé votre mot de passe \n';
      this.hasErrors = true;
    }

    // eslint-disable-next-line eqeqeq
    if (this.mdp != this.confirmPwd) {
      this.errorMessage += '- Les mots de passe ne sont pas identique \n';
      this.hasErrors = true;
    }

    if (this.hasErrors) {
      console.log(this.errorMessage);
      this.alertBox.create({
        header: 'Alert',
        subHeader: 'Les informations sont incorrect :',
        message: this.errorMessage,
        buttons: ['OK']
      }).then(res => {

        res.present();

      });
    } else {
      const context = this;
        axios.post('http://192.168.43.52:9876/api/utilisateur', {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            date_naissance: this.date_naissance,
            mdp: this.mdp
          }
         // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        ).then(function(response) {
          if(response.status===200){ // si il n'y a pas d'erreur
            context.router.navigate(['tabs']);
          }
         // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        }).catch(function(error) { // si il y a une erreur
          console.log(error);
          alert('Erreur Identifiant/Mot de passe inconnu');
        });
    }
  }

  goToConnection() {
    this.router.navigate(['connection']);
  }
}
