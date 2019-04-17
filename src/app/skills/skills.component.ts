import { Component, OnInit } from '@angular/core';
import {SkillServiceService} from '../services/skill-service.service';
import {Skill} from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  constructor(private skillService: SkillServiceService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

}
