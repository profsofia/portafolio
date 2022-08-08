import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApigithubService } from '../apigithub.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  repos: Observable<any> |undefined;
  item: any[]= [];
  constructor(private gitService: ApigithubService) { }

  ngOnInit(){
    for(let j=0; j<1000; j++){
      this.item.push(j);
    }
    console.log(this.item);

    this.repos =this.gitService.traerRepos();
  }

}
