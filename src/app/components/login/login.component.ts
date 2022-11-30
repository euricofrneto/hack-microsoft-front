import {Component, OnInit, OnDestroy} from '@angular/core';
import {ConfigService} from '../../service/app.config.service';
import {AppConfig} from '../../api/appconfig';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {LoginServiceService} from "./service/login-service.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit, OnDestroy {

    valCheck: string[] = ['remember'];
    config: AppConfig;
    subscription: Subscription;

    password: string;
    email: string;
    loading:boolean = false;

    constructor(public configService: ConfigService,
                private loginService: LoginServiceService,
                private messageService: MessageService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    login(): void {
        const payload = {
            email: this.email,
            password: this.password,
        };
        this.loading = true;
        this.messageService.clear();

        this.loginService.login(payload).subscribe((response) => {
            this.loading = false;
            if (response.status == 'success') {
                localStorage.setItem('user', response.data);
                this.router.navigate(['/start']);
            }
            if (response.status == 'error') {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Login ou senha incorretos',
                    life:2000
                });
            }
        });
    }

    social(type): void {
        // mensagem que ainda não fizemos essa implementação
    }

}
