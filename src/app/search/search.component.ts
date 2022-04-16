import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  searchData = new EventEmitter<any>()

  userProfile = new User("","",0,0)
  searchUserName: any

  search(){
    this.searchData.emit(this.searchUserName);
    this.userProfile = new User("","",0,0)
    this.searchUserName = ""  //clear form field
  }
  constructor() { }

  ngOnInit(): void {
  }

}
