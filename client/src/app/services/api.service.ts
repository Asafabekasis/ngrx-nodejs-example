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

  addProduct(body: any) {
    return this.http.post(
      environment.api_url + '/writenewproduct',
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
}
