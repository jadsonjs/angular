import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  /** The URL of the scenerios service */
  urlGet = environment.apiUrl + '/scenario';

  constructor(private http: HttpClient) { }

  /** return scenarios */
  getScenarios() {
       // return a observable
       // any[] == return an array of any type
       return this.http.get<any[]>(this.urlGet);
  }

}
