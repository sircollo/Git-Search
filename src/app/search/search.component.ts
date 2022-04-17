import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { User } from '../classes/user';
import { GitSearchService } from '../services/git-search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users!:String[]
  constructor(private gitSearchService:GitSearchService) { }

 getUsers(){
   this.gitSearchService.getUserProfile().subscribe((profile)=>{ 
     console.log(profile)
   })
 }
 

  ngOnInit(): void {
  }

}


