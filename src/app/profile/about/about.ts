import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss'],
    imports: []
})
export class About implements OnInit {
about1: any
about2: any
summary:any

constructor(private profileService:APIService) { }

  ngOnInit() {
    this.summary = this.profileService.summaryList
  }

}
