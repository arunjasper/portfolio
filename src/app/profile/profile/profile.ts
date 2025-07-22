import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile implements OnInit {
  cvUrl: any
  constructor(private profileService: APIService) { }

  ngOnInit() {
    this.cvUrl = this.profileService.resumeurl
  }

  onClick() {
    window.open("./assets/ArunJasper.pdf");
  }

}
