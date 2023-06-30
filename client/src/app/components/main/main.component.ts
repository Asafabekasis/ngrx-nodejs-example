import { Component, OnInit } from '@angular/core';
import { Store, createAction } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from '../../main.actions';
import { ApiService } from 'src/app/services/api.service';
import * as selectors from '../../main.selectors'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  products$: Observable<any>;
  customers$: Observable<any>;

  count$: Observable<number>;
  count2$: Observable<number>;
  count50$: Observable<number>;

  constructor(
    private store: Store<{ products: []; customers: [],count:number,count2 }>,
    private _api: ApiService
  ) {
    this.products$ = store.select('products');
    this.customers$ = store.select('customers');
    this.count$ = store.select('count');
    this.count2$ = store.select('count2');
    this.count50$ = store.select(selectors.selectCountList);
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

  increment1000(){
    //val1 and val2 MUST be equal in there names in the same function we are sending them to
    this.store.dispatch(mainActions.groupPageActionsCounter.increment1000({val1:1000,val2:[{val:2000}]}));
  }

  increment100(){
    //val1 and val2 MUST be equal in there names in the same function we are sending them to
    this.store.dispatch(mainActions.groupPageActionsCounter.increment100({val1:100,val2:200}));
  }

  increment10(){                     
    //single parameter                               
    this.store.dispatch(mainActions.groupPageActionsCounter.increment10({payload:10}));
  }

  increment() {
    this.store.dispatch(mainActions.groupPageActionsCounter.incrementBlahBlah());
  }

  decrement() {
    this.store.dispatch(mainActions.groupPageActionsCounter.decrement());
  }

  reset() {
    this.store.dispatch(mainActions.groupPageActionsCounter.reset());
  }

  increment2() {
    this.store.dispatch(createAction('[Counter Component] Increment2')());
  }

  decrement2() {
    this.store.dispatch(mainActions.decrement2());
  }

  reset2() {
    this.store.dispatch(mainActions.reset2());
  }

}
