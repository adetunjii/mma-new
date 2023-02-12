import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BecomeAnInfluencerComponent } from './become-an-influencer/become-an-influencer.component';
import { HireUsComponent } from './hire-us/hire-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    BecomeAnInfluencerComponent,
    HireUsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'homepage', component: HomepageComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'become-an-influencer', component: BecomeAnInfluencerComponent},
      {path: 'hire-us', component: HireUsComponent},
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
