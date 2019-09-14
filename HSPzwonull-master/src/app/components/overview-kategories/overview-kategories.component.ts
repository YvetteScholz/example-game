import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-overview-kategories',
  templateUrl: './overview-kategories.component.html',
  styleUrls: ['./overview-kategories.component.scss']
})
export class OverviewKategoriesComponent implements OnInit {


  public courseID;
  public courseData;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {

    this.courseID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/course/' + this.courseID + '/?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
  }
}
