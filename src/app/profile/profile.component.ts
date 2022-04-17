import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GitSearchService } from '../services/git-search.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<any>()
  // profile:any = []
  profile:any = [];
  repos!:any[]

  // userName!:string
  userName:string = ''
  constructor(private gitSearchService:GitSearchService) {
    // this.gitSearchService.getProfileInfo().subscribe((profile)=>{
    //   this.profile = profile;
    //   console.log(profile)
    // });

  //  this.gitSearchService.getProfileRepo().subscribe((repos:any)=>{
  //    console.log(repos)
  //    this.repos = repos
  //  })
    
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
     this.repos = repos
   })
   
   
  }

  ngOnInit(): void {
    // this.gitSearchService.getProfileInfo().subscribe((profile)=>{
    //   this.profile = profile;
    //   console.log(profile)
    // });
    // this.userName = "sircollo"
  }

}
