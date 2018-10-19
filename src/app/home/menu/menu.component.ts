import { FormControl, FormGroup } from '@angular/forms';
import { GitService } from '../../services/git.service';
import { Dados } from '../../models/git-info.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  repos$: Object;
  repo = false;

  public formulario: FormGroup = new FormGroup({
    'user': new FormControl(null),
    'repository': new FormControl(null)
  });

  constructor(private data: GitService) { }

  ngOnInit() { }

  public getRepo() {

    const repoInfo: Dados = new Dados(
      this.formulario.value.user,
      this.formulario.value.repository
    );

    this.data.saveUserRepo(repoInfo.user, repoInfo.repository);
    console.log('User: ', repoInfo.user);
    console.log('Repo: ', repoInfo.repository);

    this.data.getRepo(repoInfo.user, repoInfo.repository).subscribe(res => {
      this.repos$ = res;
      console.log('Issues Array: ', this.repos$);
      if (this.repos$ != null) {
        this.repo = true;
      }
    }, error => {
      console.log(error);
    });

  }

}
