import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/posts', {responseType: 'json'}).pipe(response => response);
  }

}
