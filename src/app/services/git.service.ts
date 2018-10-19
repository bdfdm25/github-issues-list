import { URL_API } from './../git.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GitService {

    public user: string;
    public repo: string;

    constructor(private http: HttpClient) {}

    public saveUserRepo(owner: string, repository: string) {
        this.user = owner;
        this.repo = repository;
        console.log('Data: ', this.user, this.repo);
    }

    public getIssues(userName: string, repoName: string) {
        return this.http.get(`${URL_API}/${userName}/${repoName}/issues`);
    }

    public getRepo(userName: string, repoName: string) {
        return this.http.get(`${URL_API}/${userName}/${repoName}`);
    }

}


