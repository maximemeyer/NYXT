import { FactoryImpl } from '../dao/factory';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
import { logout } from '../store/utilisateur.action';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage {
    utilisateur$: Observable<string>;
    constructor(private router: Router,private store: Store<{ utilisateur: any }>) {
    }

    async ionViewWillEnter() {
      await this.store.pipe().subscribe(
        (data: any) => {

          this.utilisateur$ = data.utilisateur;
        });
      console.log(this.utilisateur$);
    }
    onDisconnect() {
      this.store.dispatch(logout());

      this.router.navigate(['/connection']);
    }
}
