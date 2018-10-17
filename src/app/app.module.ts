import { GitService } from './services/git.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewIssueComponent } from './home/new-issue/new-issue.component';
import { ListaIssueComponent } from './home/lista-issue/lista-issue.component';
import { Error404Component } from './error404/error404.component';
import { MenuComponent } from './home/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewIssueComponent,
    ListaIssueComponent,
    Error404Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ GitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
