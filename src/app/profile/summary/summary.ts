import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.html',
  styleUrls: ['./summary.scss']
})
export class Summary implements OnInit {

  constructor(private profileService: APIService) { }
  summaryList : string[] = [];
  ngOnInit() {
    this.summaryList = [...this.profileService.summaryList];
  }
}
