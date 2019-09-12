import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DetailNewsComponent} from './components/detail-news/detail-news.component';
import {DetailTopkursComponent} from './components/detail-topkurs/detail-topkurs.component';
import {DetailKursComponent} from './components/detail-kurs/detail-kurs.component';
import {OverviewKategoriesComponent} from './components/overview-kategories/overview-kategories.component';
import {OverviewKurseComponent} from './components/overview-kurse/overview-kurse.component';
import {OverviewWeekComponent} from './components/overview-week/overview-week.component';
import {OverviewKurseamwochentagComponent} from './components/overview-kurseamwochentag/overview-kurseamwochentag.component';
import {HomeComponent} from './components/home/home.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    DetailNewsComponent,
    DetailTopkursComponent,
    DetailKursComponent,
    OverviewKategoriesComponent,
    OverviewKurseComponent,
    OverviewWeekComponent,
    OverviewKurseamwochentagComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
