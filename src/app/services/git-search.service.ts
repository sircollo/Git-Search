import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
// import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
 
  private userName:string
  
  constructor(private http: HttpClient){
    this.userName = 'sircollo'
  }
  getUserProfile(){
    return this.http.get('https://api.github.com/users/' + this.userName);
  }
  getProfileInfo(){  
    return this.http.get('https://api.github.com/users/'+this.userName+'?acess_token='+ environment.apiKey); 
  }   
 
  ngOnInit(){
    this.http.get<any>('https://api.github.com/users').subscribe((data)=>{
      this.userName = data;
      
    })

  }

}
  
  