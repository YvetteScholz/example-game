import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-topkurs',
  templateUrl: './detail-topkurs.component.html',
  styleUrls: ['./detail-topkurs.component.scss']
})
export class DetailTopkursComponent implements OnInit {
  public topcourses;

  constructor(private http: HttpClient) {

    this.topcourses = [];
  }

  ngOnInit() {
    this.http.get('https://hochschulsport-koeln.de/json/topcourses?_format=json')
      .subscribe((data) => {
        this.topcourses = data;
      });

  }

}

