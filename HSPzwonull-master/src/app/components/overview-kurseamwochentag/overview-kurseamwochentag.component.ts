import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-overview-kurseamwochentag',
  templateUrl: './overview-kurseamwochentag.component.html',
  styleUrls: ['./overview-kurseamwochentag.component.scss']
})
export class OverviewKurseamwochentagComponent implements OnInit {

  public courses;

  constructor(private http: HttpClient) {
    this.courses = [];
  }

  ngOnInit() {

    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/8Wochentag/?_format=json')
      .subscribe((data) => {
        this.courses = data;
      });

  }
}
