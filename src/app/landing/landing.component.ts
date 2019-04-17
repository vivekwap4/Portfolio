import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let typed = new Typed('.type_wrap', {
      strings: ['Hello! I am Vivek.<br>Welcome to my portfolio.'],
      typeSpeed: 80
    });
  }

}
