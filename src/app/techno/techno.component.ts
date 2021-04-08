import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss']
})
export class TechnoComponent implements OnInit {
Techno = [
  {
      name: "HTML",
      img: "../../assets/img/html.png",
      width: 90
    },{
      name: "CSS",
      img: "../../assets/img/css.png",
      width: 90
    },{
      name: "JavaScript",
      img: "../../assets/img/js.png",
      width: 50
    },{
      name: "GitHub",
      img: "../../assets/img/github.png",
      width: 95
    },{
      name: "Angular",
      img: "../../assets/img/angular.png",
      width: 80
    },{
      name: "Sass",
      img: "../../assets/img/sass.png",
      width: 80
    },{
      name: "TypeScript",
      img: "../../assets/img/type.png",
      width: 70
    },{
      name: "Bootstrap",
      img: "../../assets/img/boot.png",
      width: 90
    }
]
  constructor() { }

 ngOnInit(){
    AOS.init();
  }

}
