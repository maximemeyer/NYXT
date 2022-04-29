import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    nom: string;
    prenom: string;
    email: string;
    date: Date;
    password: string;
    confirmPwd: string;
    errorMessage = '';
    hasErrors = false;
    constructor(private router: Router, private alertBox: AlertController) { }

    ngOnInit() {
    }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  RegisterUser() {
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

    if (this.password == null) {
      this.errorMessage += '- Mot de passe non fournis \n';
      this.hasErrors = true;
    }

    if (this.confirmPwd == null) {
      this.errorMessage += '- Vous n\'avez pas confirmé votre mot de passe \n';
      this.hasErrors = true;
    }

    // eslint-disable-next-line eqeqeq
    if (this.password != this.confirmPwd) {
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
      console.log('OK');
    }
  }

  goToConnection() {
    this.router.navigate(['connection']);
  }
}
