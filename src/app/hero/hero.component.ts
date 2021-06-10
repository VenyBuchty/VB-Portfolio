import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
AOS:any;

  constructor() { }

  ngOnInit(){
    AOS.init({
      once: true
    });
  }

}
