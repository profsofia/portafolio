import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.scss']
})
export class AcercaDeMiComponent implements OnInit {
  list = ['Sofía Schenone']
  links= [
    {icon:"uil uil-linkedin", href:"https://www.linkedin.com/in/sofiaschenone/"},
    {icon:"uil uil-youtube", href:"https://www.youtube.com/channel/UCcSErMMrU9eYeT93L-87n-w"},
    //{icon:"uil uil-github-alt", href:"https://github.com/profsofia"},
    {icon:"uil uil-envelope", href:"sofiainesschenone@gmail.com"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
