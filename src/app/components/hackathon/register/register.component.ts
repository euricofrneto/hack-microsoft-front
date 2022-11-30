import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppConfig} from "../../../api/appconfig";
import {Subscription} from "rxjs";
import {ConfigService} from "../../../service/app.config.service";
import {Router} from "@angular/router";
import {RegisterService} from "./service/register.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [MessageService]
})
export class RegisterComponent implements OnInit, OnDestroy {

    valCheck: string[] = ['remember'];
    subscription: Subscription;
    config: AppConfig;

    name: string = '';
    phone: string = '';
    cpf: string = '';
    email: string = '';
    password: string = '';

    constructor(public configService: ConfigService,
                private registerService: RegisterService,
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

    register(): void {
        const payload = {
            name: this.name,
            phone: this.phone,
            cpf: this.cpf,
            email: this.email,
            password: this.password
        }
        this.messageService.clear();

        if(!this.verify()){
            this.messageService.add({
                severity: 'error',
                summary: 'Erro',
                detail: 'Preencha todos os campos',
                life:2000
            });
            return;
        }

        this.registerService.register(payload).subscribe((response) => {
            if (response.status == 'success') {
                this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Usuário cadastrado'});
                this.router.navigate(['/login']);
            }
            if (response.status == 'error') {
                this.messageService.add({severity: 'warning', summary: 'Erro', detail: response.message});
            }
        });
    }

    verify(): boolean {
        if (this.name == '' || this.name == null ||
            this.phone == '' || this.phone == null ||
            this.cpf == '' || this.cpf == null ||
            this.email == '' || this.email == null ||
            this.password == '' || this.password == null) {
            return false;
        } else {
            return true;
        }
    }

}