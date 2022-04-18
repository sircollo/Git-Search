import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GitSearchService } from '../services/git-search.service';
import { Observable } from 'rxjs';
import { Repositories } from '../classes/repositories';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<any>()
  
  profile:any = [];
  repos!:any[]

  userRepos = new Repositories("","","","",new Date)
  userName:string = ''
  constructor(private gitSearchService:GitSearchService) {

  }
  getUser(userName:string){
    this.gitSearchService.updateProfile(this.userName);
    this.gitSearchService.getProfileInfo().subscribe((profile)=>{
      this.profile = profile;
      console.log(profile)
      this.userName=""
    });
  
   this.gitSearchService.getProfileRepo().subscribe((repos:any)=>{
     console.log(repos)
     this.searchOutput.emit(this.userRepos)
     console.log(this.searchOutput)
     this.repos = repos
   })
   
   
  }

  ngOnInit(): void {
    this.userName = "sircollo"
    this.getUser('sircollo')
  }

}
