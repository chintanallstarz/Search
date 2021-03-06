import { Component } from '@angular/core';

import { GitHubService } from '../../app/services/github'

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]
})

export class HomePage {
  public foundRepos;
  public username;

  constructor(private github: GitHubService) {
    
  }

  getRepos(){
     this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
                console.log(this.foundRepos);
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
  }

}
