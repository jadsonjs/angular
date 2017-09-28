import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  urlGet = 'http://localhost:8080/itens';

  urlPost = 'http://localhost:8080/item';

  /* Receive in the constructor and criate a variable in the class called "http" */
  constructor(private http: HttpClient) { }

  getItens(){
    // return a observable
    // any[] == return an array of any type
    return this.http.get<any[]>(this.urlGet);
  }

  // this method call the post method in the backend service
  postItem(item: any){
    return this.http.post(this.urlPost, item);
  }

}
