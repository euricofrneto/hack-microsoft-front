import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";

const routeUsers = '/users/';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private api: ApiService) {
  }

  login(data): any {
    return this.api.get(routeUsers + 'login', data);
  }
}
