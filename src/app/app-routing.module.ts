import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
// import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import {NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  {path: 'repositories', component:RepositoriesComponent},
  {path: 'profiles', component:ProfileComponent},
  {path: 'about', component:AboutComponent},
  {path: '**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
