import {Routes} from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import {ProjectsComponent} from './projects/projects.component';

export const routes: Routes = [                       // const routes used in app-routing.module.ts
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent }
];
