import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-overview-kurse',
  templateUrl: './overview-kurse.component.html',
  styleUrls: ['./overview-kurse.component.scss']
})
export class OverviewKurseComponent implements OnInit {

  public course;
  public  course1;



  constructor(private http: HttpClient) {
    this.course = [];
    this. course1 = [];



  }

  ngOnInit() {
    this.http.get(' https://hochschulsport-koeln.de/json/courses/36/?_format=json')
      .subscribe((data) => {
        this.course = data;
      });
    this.http.get(' https://hochschulsport-koeln.de/json/courses/1/?_format=json')
      .subscribe((data) => {
        this.course1 = data;
      });

  }
}

