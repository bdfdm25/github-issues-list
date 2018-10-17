import { MenuComponent } from './home/menu/menu.component';
import { NewIssueComponent } from './home/new-issue/new-issue.component';
import { ListaIssueComponent } from './home/lista-issue/lista-issue.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '' , redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
        children: [
            { path: '', component: MenuComponent } ,
            { path: 'lista-issue', component: ListaIssueComponent } ,
            { path: 'nova-issue', component: NewIssueComponent },
        ]
    },
    { path: '**', component: Error404Component }
];
