import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'repositories', component:RepositoriesComponent},
  {path: 'users', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
