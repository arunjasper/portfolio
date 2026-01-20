import { Component, inject, OnInit } from '@angular/core';
import { Project } from '../../types';
import { APIService } from '../api.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  apiService = inject(APIService);
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = [...this.apiService.getProjects()];
  }

  navigate(url: string): void {
    window.open(url, '_blank');
  }
}