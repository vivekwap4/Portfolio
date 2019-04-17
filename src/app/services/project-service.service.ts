import { Injectable } from '@angular/core';
import { Project } from '../projects/project';
import {projects} from '../projects/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }
  getProjects(): Project[] {
    return projects;
  }
}
