import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.html',
    styleUrls: ['./experience.scss'],
    imports: []
})
export class Experience implements OnInit {

experience: any

  constructor(private profileService:APIService) { }

    ngOnInit() {

      this.experience =  this.profileService.experienceList
    }
}
