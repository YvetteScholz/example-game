import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-overview-kurseamwochentag',
  templateUrl: './overview-kurseamwochentag.component.html',
  styleUrls: ['./overview-kurseamwochentag.component.scss']
})
export class OverviewKurseamwochentagComponent implements OnInit {

  public course;
  public  ID;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.course = [];
  }

  ngOnInit() {
    this.ID = this.route.snapshot.paramMap.get('id');
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + this.ID + '/?_format=json')
      .subscribe((data) => {
        this.course = data;
      });

  }
}
