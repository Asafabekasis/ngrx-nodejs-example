import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { ApiService } from './services/api.service';
import * as mainActions from './main.actions';
@Injectable()
export class MainEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mainActions.getProductsAction),
      tap(() => {
        console.log('new getproducts occurred in queue');
      }),
      exhaustMap(() =>
        this.apiService.getAllProducts().pipe(
          map((products) => mainActions.productsAction({ payload: products })),
          tap((products) => {
            console.log(products);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mainActions.getCustomersAction),
      tap(() => {
        // console.log('new getCustomer occurred in queue');
      }),
      exhaustMap(() =>
        this.apiService.getAllCustomers().pipe(
          map((customers) =>
            mainActions.customersAction({ payload: customers })
          ),
          tap((customers) => {
            // console.log(customers);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mainActions.addProductEffect),
      tap(() => {
        // console.log('new product occurred in queue');
      }),
      map((action) => action.payload),
      tap((action) => {
        // console.log(action);
      }),
      mergeMap((product) =>
        this.apiService.addProduct(product).pipe(
          map((res) => mainActions.putProductAction({ payload: product })),
          catchError((error) => EMPTY)
        )
      )
    )
  );
}
