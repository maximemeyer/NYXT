import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage {

    constructor(private router: Router) { }

    onDisconnect() {
        this.router.navigate(['/connection']);
    }
}
