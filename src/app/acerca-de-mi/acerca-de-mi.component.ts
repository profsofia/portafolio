import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.scss']
})
export class AcercaDeMiComponent implements OnInit {
  list = ['Angular Typewriter Effect', 'Hello World...']
  constructor() { }

  ngOnInit(): void {
  }

}
