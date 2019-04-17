import { Component, OnInit } from '@angular/core';
import {Project} from './project';
import {ProjectServiceService} from '../services/project-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectServiceService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.projects.reverse();
  }

}
