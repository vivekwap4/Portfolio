import { Injectable } from '@angular/core';
import {Experience} from '../experience/experience';
import {experiences} from '../experience/experiences';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperiences(): Experience[] {
    return experiences;
  }
}
