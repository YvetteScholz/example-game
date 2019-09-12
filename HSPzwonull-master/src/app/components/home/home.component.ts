import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public news;
  public topcourses;
  public events;

  constructor(private http: HttpClient) {
    this.news = [];
    this.topcourses = [];
    this.events = [];
  }

  ngOnInit() {

    this.http.get('https://hochschulsport-koeln.de/json/news?_format=json')
      .subscribe((data) => {
        this.news = data;
      });

    this.http.get('https://hochschulsport-koeln.de/json/topcourses?_format=json')
      .subscribe((data) => {
        this.topcourses = data;
      });
    this.http.get(' https://hochschulsport-koeln.de/json/events?_format=json')
      .subscribe((data) => {
        this.events = data;
      });

  }

}
