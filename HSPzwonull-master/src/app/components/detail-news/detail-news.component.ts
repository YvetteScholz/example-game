import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {

  public news;
  public topcourses;

  constructor(private http: HttpClient) {
    this.news = [];
    this.topcourses = [];
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

  }

}
