import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from '../main.actions';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as selectors from '../main.selectors'


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<any>;
  customersSelector$: Observable<any>;


  constructor(
    private store: Store<{ customers: []}>,
    private _api: ApiService,
    public _fb: FormBuilder
  ) {
    this.customers$ = store.select('customers');
    this.customersSelector$ = store.select(selectors.selectCustomersList);

  }

  public form: FormGroup;

  ngOnInit(): void {
    this.form = this._fb.group({
      customerName: ['', Validators.required],
      color: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  deleteCustomer(i,customer){
    // this.store.dispatch(mainActions.deleteCustomer({payload:i}))
    this.store.dispatch(mainActions.deleteEffect({payload:{i:i,type:'customers'}}))

  }

  add() {
    console.log(this.form.value);
    this.store.dispatch(
      mainActions.addCustomerEffect({
        payload: { ...this.form.value, active: true },
      })
    );
    this.form.reset();
  }

  getNew(){
    this.store.dispatch(
      mainActions.getAnyEffect({
        payload: 'customers',
      })
    );
  }

  edit(i,customer){}

}
