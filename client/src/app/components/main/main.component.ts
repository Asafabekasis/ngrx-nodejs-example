import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from '../../main.actions';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  products$: Observable<any>;
  customers$: Observable<any>;

  constructor(
    private store: Store<{ products: []; customers: [] }>,
    private _api: ApiService
  ) {
    this.products$ = store.select('products');
    this.customers$ = store.select('customers');
  }

  ngOnInit() {

  }

  activeFunction(val: number,target:string) {
    switch(target){
      case 'product':
        this.store.dispatch(
          mainActions.productChangeActive({
            payload:val
          })
        );
      break
      case 'customer':
        this.store.dispatch(
          mainActions.customerChangeActive({
            payload:val
          })
        );
      break

    }
  }

}
