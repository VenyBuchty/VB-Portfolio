import { localizedString } from '@angular/compiler/src/output/output_ast';
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
      width: 50
    },{
      name: "Sass",
      img: "../../assets/img/sass.png",
      width: 80
    },{
      name: "TypeScript",
      img: "../../assets/img/type.png",
      width: 50
    },{
      name: "Bootstrap",
      img: "../../assets/img/boot.png",
      width: 90
    },{
      name: "MySQL",
      img: "../../assets/img/sql.png",
      width: 70
    },{
      name: "PHP",
      img: "../../assets/img/php.png",
      width: 50
    },{
      name: "Symfony",
      img: "../../assets/img/symfo.png",
      width: 40
    },{
      name: "XAMPP",
      img: "../../assets/img/xampp.png",
      width: 80
    },{
      name: "AJAX",
      img: "../../assets/img/ajax.png",
      width: 30
    },{
      name: "jQuery",
      img: "../../assets/img/jquery.png",
      width: 50
    },{
      name: "React",
      comment: "currently learning",
      img: "../../assets/img/react.png",
      width: 5
    },{
      name: "Vue.js",
      comment: "upcoming",
      img: "../../assets/img/vue.png",
      width: 0
    }
    
]
  constructor() { }

 ngOnInit(){
    AOS.init({
      once: true
    });
  }

}
