import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-overview-kategories',
  templateUrl: './overview-kategories.component.html',
  styleUrls: ['./overview-kategories.component.scss']
})
export class OverviewKategoriesComponent implements OnInit {



  constructor(private http: HttpClient) {



  }

  ngOnInit() {


  }
}
