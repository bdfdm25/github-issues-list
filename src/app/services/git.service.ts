import { URL_API } from './../git.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GitService {

    constructor(private http: HttpClient) {}

    public getIssues(userName: string, repoName: string) {
        return this.http.get(`${URL_API}/${userName}/${repoName}/issues`);
    }

}


