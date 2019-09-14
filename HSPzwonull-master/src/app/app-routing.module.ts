import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewKategoriesComponent} from './components/overview-kategories/overview-kategories.component';
import {HomeComponent} from './components/home/home.component';
import {DetailKursComponent} from './components/detail-kurs/detail-kurs.component';
import {OverviewWeekComponent} from './components/overview-week/overview-week.component';
import {OverviewKurseamwochentagComponent} from './components/overview-kurseamwochentag/overview-kurseamwochentag.component';
import {DetailNewsComponent} from './components/detail-news/detail-news.component';
import {DetailTopkursComponent} from './components/detail-topkurs/detail-topkurs.component';
import {OverviewKurseComponent} from './components/overview-kurse/overview-kurse.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'overview-categories', component: OverviewKategoriesComponent},
  {path: 'detail-kurs/:id', component: DetailKursComponent},
  {path: 'overview-week/:id', component: OverviewWeekComponent },
  {path: 'detail-news/:id', component: DetailNewsComponent},
  {path: 'detail-topkurse/:id', component: DetailTopkursComponent},
  {path: 'overview-kurseamwochentag/:id', component: OverviewKurseamwochentagComponent},
  {path: 'overview-kurse/:id', component: OverviewKurseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
