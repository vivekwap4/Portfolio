import { Injectable } from '@angular/core';
import {Skill} from '../skills/skill';
import {skills} from '../skills/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor() { }
  getSkills(): Skill[] {
    return skills;
  }
}
