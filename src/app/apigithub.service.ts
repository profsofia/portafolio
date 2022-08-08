import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigithubService {
  constructor(
    private httpClient : HttpClient
  ) { }
  traerRepos(): Observable<any>{
    return this.httpClient.get('https://api.github.com/users/profsofia/repos')
    /*.pipe(map((repo:any)=>{
      repo.filter((value:any)=> value.description
      )

    })
  )*/
  }

}
