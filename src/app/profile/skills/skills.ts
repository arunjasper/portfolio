import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
    selector: 'app-skills',
    templateUrl: './skills.html',
    styleUrls: ['./skills.scss'],
    imports: []
})
export class Skills implements OnInit {

  skills: any;

  skillSet!: Map<string, string[]>;

  constructor(private profileService:APIService) { }

    ngOnInit() {

      this.skills =  this.profileService.skills();
      this.skillSet = this.profileService.skillsSet;     
      
    }

}
