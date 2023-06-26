import { createReducer, on } from '@ngrx/store';
import {
  productsAction,
  putProductAction,
  customersAction,
  productChangeActive,
  customerChangeActive,
} from './main.actions';
import { replaceItem,changeActive } from "./main.helpers";


export const defaultProducts = [];
export const defaultCustomers = [];

export const productsReducer = createReducer(
  defaultProducts,
  on(productsAction, (state, { payload }) => payload),
  on(putProductAction, (state, { payload }) => [...state, payload]),
  on(productChangeActive, (state, { payload }) => changeActive(state,payload))
);

export const customersReducer = createReducer(
  defaultCustomers,
  on(customersAction, (state, { payload }) => payload),
  on(customerChangeActive, (state, { payload }) => changeActive(state,payload))
);
