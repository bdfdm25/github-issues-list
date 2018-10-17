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
  }

  public getRepoInfo() {

    const repoInfo: Dados = new Dados(
      this.formulario.value.user,
      this.formulario.value.repository
    );

    this.gitService.getIssues(repoInfo.user, repoInfo.repository).subscribe(
      gitService => this.issues$ = gitService
    );

    console.log('Get return: ', this.issues$);


    console.log('Data from input: ', repoInfo.user, repoInfo.repository);
  }

}
