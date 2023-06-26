import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from './main.actions';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  products$: Observable<any>;
  customers$: Observable<any>;

  constructor(
    private store: Store<{ products: []; customers: [] }>,
    private _api: ApiService
  ) {
    this.products$ = store.select('products');
    this.customers$ = store.select('customers');

    this.store.dispatch(mainActions.getProductsAction());
    this.store.dispatch(mainActions.getCustomersAction());
  }


}
