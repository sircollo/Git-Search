import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from '../classes/user';
import { GitSearchService } from '../services/git-search.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  profile:any = [];
  repos!:any[]
  // userName!:string
  userName:string = 'sircollo'
  

  constructor(private gitSearchService:GitSearchService) {
  //   this.gitSearchService.getProfileInfo().subscribe((profile)=>{
  //     this.profile = profile;
  //     console.log(profile)
  //   });
 
  //  this.gitSearchService.getProfileRepo().subscribe((repos:any)=>{
  //    console.log(repos)
  //    this.repos = repos
  //  })
    
  }
  // userName:string = 'nazarena254'
  getUser(userName:string){
    this.gitSearchService.updateProfile(this.userName);
    this.gitSearchService.getProfileInfo().subscribe((profile)=>{
      this.profile = profile;
      console.log(profile)
    });

   this.gitSearchService.getProfileRepo().subscribe((repos:any)=>{
     console.log(repos)
     this.repos = repos
   })
   
  }

  ngOnInit(){
    // this.userName = "sircollo" 
    
  }

}
