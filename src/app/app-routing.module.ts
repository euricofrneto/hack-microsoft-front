import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {LoginComponent} from './components/login/login.component';
import {StartHackathonComponent} from "./components/hackathon/start-hackathon/start-hackathon.component";
import {AccountComponent} from "./components/hackathon/account/account.component";
import {RedirectComponent} from "./layouts/redirect/redirect.component";
import {FilesComponent} from "./components/hackathon/files/files.component";
import {HistoryComponent} from "./components/hackathon/history/history.component";
import {ProfileComponent} from "./components/hackathon/profile/profile.component";
import {SavedComponent} from "./components/hackathon/saved/saved.component";
import {WatchComponent} from "./components/hackathon/watch/watch.component";

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
                    {path: 'files', component: FilesComponent},
                    {path: 'history', component: HistoryComponent},
                    {path: 'profile', component: ProfileComponent},
                    {path: 'saved', component: SavedComponent},
                    {path: 'watch', component: WatchComponent},
                ],
            },
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
