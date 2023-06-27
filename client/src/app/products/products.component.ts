import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from '../main.actions';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<any>;

  constructor(
    private store: Store<{ products: [] }>,
    private _api: ApiService,
    public _fb: FormBuilder
  ) {
    this.products$ = store.select('products');
  }

  public form: FormGroup;

  ngOnInit(): void {
    this.form = this._fb.group({
      productName: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],
      section: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  deleteProduct(i, product) {
    // this.store.dispatch(mainActions.deleteProduct({payload:i}))
    this.store.dispatch(mainActions.deleteEffect({payload:{i:i,type:'products'}}))
  }

  add() {
    console.log(this.form.value);
    this.store.dispatch(
      mainActions.addProductEffect({
        payload: { ...this.form.value, active: true },
      })
    );
    this.form.reset();
  }

  getNew(){
    this.store.dispatch(
      mainActions.getAnyEffect({
        payload: 'products',
      })
    );
  }

  edit(i, product) {}

}
