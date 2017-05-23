import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestProvider {

  strUrl : string = 'http://jsonplaceholder.typicode.com/';

  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }

  getPost(){
    return this.http.get(this.strUrl+'posts')
    .map(res => <any>res.json());
  }

  getUser(){
    return this.http.get(this.strUrl+'users')
    .map(res => <any>res.json());
  }

}
