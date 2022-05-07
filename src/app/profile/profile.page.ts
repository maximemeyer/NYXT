import { FactoryImpl } from '../dao/factory';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage {
    private userName;
    constructor(private router: Router) {
    }
    onDisconnect() {
        this.router.navigate(['/connection']);
    }
    ionViewWillEnter() {
        this.userName = FactoryImpl.userName;
    }
}
