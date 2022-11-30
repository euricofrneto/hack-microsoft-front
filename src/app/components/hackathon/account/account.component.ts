import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        const user = localStorage.getItem('user');
        if (!user) {
            this.router.navigate(['/login']);
        }
    }

}
