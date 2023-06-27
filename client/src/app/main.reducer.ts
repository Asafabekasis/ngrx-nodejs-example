import { createReducer, on } from '@ngrx/store';
import {
  productsAction,
  putProductAction,
  customersAction,
  productChangeActive,
  customerChangeActive,
  deleteProduct
} from './main.actions';
import { replaceItem,changeActive,removeAt } from "./main.helpers";


export const defaultProducts = [];
export const defaultCustomers = [];

export const productsReducer = createReducer(
  defaultProducts,
  on(productsAction, (state, { payload }) => payload),
  on(putProductAction, (state, { payload }) => [...state, payload]),
  on(productChangeActive, (state, { payload }) => changeActive(state,payload)),
  on(deleteProduct, (state, { payload }) => removeAt(state,payload))
);

export const customersReducer = createReducer(
  defaultCustomers,
  on(customersAction, (state, { payload }) => payload),
  on(customerChangeActive, (state, { payload }) => changeActive(state,payload))
);

// state.map((value, index) => index === payload ? {...value, active: true} : value)

// mutableOn(onAction, (state, action) => {
//   state.arr[action.index].name = action.name
//   return state
// })