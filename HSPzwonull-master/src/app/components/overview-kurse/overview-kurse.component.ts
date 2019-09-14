import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-overview-kurse',
  templateUrl: './overview-kurse.component.html',
  styleUrls: ['./overview-kurse.component.scss']
})
export class OverviewKurseComponent implements OnInit {

  public course;
  public ID;



  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.course = [];



  }

  ngOnInit() {
    this.ID = this.route.snapshot.paramMap.get('id');
    this.http.get(' https://hochschulsport-koeln.de/json/courses/' + this.ID + '/?_format=json')
      .subscribe((data) => {
        this.course = data;
      });

  }
}

