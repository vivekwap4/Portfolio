import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../services/experience-service.service';
import {Experience} from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[];
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
    this.experiences.reverse();
  }
}
