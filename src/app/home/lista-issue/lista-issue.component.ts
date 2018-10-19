import { Issue } from './../../models/issue.model';
import { GitService } from './../../services/git.service';
import { Dados } from './../../models/git-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-lista-issue',
  templateUrl: './lista-issue.component.html',
  styleUrls: ['./lista-issue.component.css']
})
export class ListaIssueComponent implements OnInit {

  issues$: Object;

  public formulario: FormGroup = new FormGroup({
    'user': new FormControl(null),
    'repository': new FormControl(null)
  });

  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.gitService.getIssues(this.gitService.user, this.gitService.repo).subscribe(
      gitService => this.issues$ = gitService
    );
  }

  public getRepoInfo() {

  }

}
