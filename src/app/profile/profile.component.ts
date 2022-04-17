import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../services/git-search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // profile:any = []
  // constructor(private gitSearchService:GitSearchService) {
  //   this.gitSearchService.getProfileInfo().subscribe((profile)=>{
  //     this.profile = profile
  //   })
  // }

  ngOnInit(): void {
  }

}
