import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {LoginComponent} from './components/login/login.component';
import {StartHackathonComponent} from "./components/hackathon/start-hackathon/start-hackathon.component";
import {AccountComponent} from "./components/hackathon/account/account.component";
import {RedirectComponent} from "./layouts/redirect/redirect.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: RedirectComponent},
            {path: 'login', component: LoginComponent},
            {
                path: '', component: AdminLayoutComponent,
                children: [
                    {path: 'start', component: StartHackathonComponent},
                    {path: 'account', component: AccountComponent},
                ],
            },
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
