import { Component, Input, OnInit } from '@angular/core';
import { Repositories } from '../classes/repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],

})
export class RepositoriesComponent implements OnInit {
  
  constructor() { }
  @Input() userRepos!:Repositories[]
  getUser(){

  }
  ngOnInit(): void {
  }

}
