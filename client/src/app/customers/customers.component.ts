import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from '../main.actions';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<any>;

  constructor(
    private store: Store<{ customers: []}>,
    private _api: ApiService
  ) {
    this.customers$ = store.select('customers');
  }

  ngOnInit(): void {

  }

  edit(i,customer){

  }

  deleteCustomer(i,customer){

  }

  addDefaultFunction() {
    this.store.dispatch(
      mainActions.addProductEffect({
        payload: {
          id: 33,
          productName: 'red-bull',
          color: 'blue',
          active: true,
          section: 'drinks',
          price: 1.9,
        },
      })
    );
  }

}
