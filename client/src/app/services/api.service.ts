import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.api_url + '/getbasicproducts');
  }

  add(body: any,target) {
    body = {body:body,target:target}
    return this.http.post(
      environment.api_url + '/writenewany',
      JSON.stringify(body),
      {
        headers: { 'Content-type': 'application/json' },
        responseType: 'text',
      }
    );
  }

  getAllCustomers() {
    return this.http.get(environment.api_url + '/getbasiccustomers');
  }

  getAnyNew(type) {
    console.log('servic',type);
    
    return this.http.get(environment.api_url + '/getnewany/'+type);
  }

  deleteAny(body) {
    return this.http.post(
      environment.api_url + '/deleteany',
      JSON.stringify(body),
      {
        headers: { 'Content-type': 'application/json' },
        responseType: 'text',
      }
    );
  }
}
