import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GitSearchService } from '../services/git-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users!:String[]
  userName!:string;
  profile:any=[];
  repos:any=[];
   


  
  constructor(private gitSearchService:GitSearchService) { }

//  getUser(){
//    this.gitSearchService.updateProfile(this.userName);
//  }
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
 

  ngOnInit(): void {
  }

}


