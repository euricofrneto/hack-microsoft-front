import {Injectable} from '@angular/core';
import {ApiService} from "../../../../service/api.service";

const routeUsers = '/users/';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private api: ApiService) {
    }

    register(data): any {
        return this.api.get(routeUsers + 'register', data);
    }
}

