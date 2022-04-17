import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProfileComponent } from './profile/profile.component';
import { GitSearchService } from './services/git-search.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './date.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    UserComponent,
    RepositoriesComponent,
    ProfileComponent,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
