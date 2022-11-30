import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-saved',
    templateUrl: './saved.component.html',
    styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        const user = localStorage.getItem('user');
        if (!user) {
            this.router.navigate(['/login']);
        }
    }

}
