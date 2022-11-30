import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    special: boolean = false;
    companies: any[] = [];

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        const user = localStorage.getItem('user');
        if (!user) {
            this.router.navigate(['/login']);
        }

        this.companies = [{
            name: 'Escola da aeronautica',
            id: 1,
        }
        ]
    }

}
