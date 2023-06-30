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
  mainheader$: Observable<any>;

  constructor(
    private store: Store<any>,
    private _api: ApiService
  ) {
    this.products$ = store.select('products');
    this.customers$ = store.select('customers');
    this.mainheader$ = store.select('mainheader');
    
    this.store.dispatch(mainActions.getProductsAction());
    this.store.dispatch(mainActions.getCustomersAction());
    this.store.dispatch(mainActions.groupPageActions.example());

    // this.store.dispatch(mainActions.example())
  }


}
