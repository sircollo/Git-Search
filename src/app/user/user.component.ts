import { Component, Input, OnInit } from '@angular/core';
// import { User } from '../classes/user';
import { GitSearchService } from '../services/git-search.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  profile:any = [];
  

  constructor(private gitSearchService:GitSearchService) {
    this.gitSearchService.getProfileInfo().subscribe((profile)=>{
      this.profile = profile;
      console.log(profile)
    });
   
  }

  ngOnInit(): void {
  }

}
