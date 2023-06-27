import { createReducer, on } from '@ngrx/store';
import {
  productsAction,
  addProductAction,
  customersAction,
  productChangeActive,
  customerChangeActive,
  deleteProduct,
  addCustomerEffect,
  addCustomerAction,
  deleteCustomer,
} from './main.actions';
import { replaceItem,changeActive,removeAt } from "./main.helpers";


export const defaultProducts = [];
export const defaultCustomers = [];

export const productsReducer = createReducer(
  defaultProducts,
  on(productsAction, (state, { payload }) => payload),
  on(productChangeActive, (state, { payload }) => state.map((value, index) => index === payload ? {...value, active: !value.active} : value)),
  on(addProductAction, (state, { payload }) => [...state, payload]),
  on(deleteProduct, (state, { payload }) => removeAt(state,payload))
);

export const customersReducer = createReducer(
  defaultCustomers,
  on(customersAction, (state, { payload }) => payload),
  on(customerChangeActive, (state, { payload }) => changeActive(state,payload)),
  on(addCustomerAction, (state, { payload }) => [...state, payload]),
  on(deleteCustomer, (state, { payload }) => removeAt(state,payload))
);

// changeActive(state,payload) productChangeActive
//state.map((value, index) => index === payload ? {...value, active: !value.active} : value)

// mutableOn(onAction, (state, action) => {
//   state.arr[action.index].name = action.name
//   return state
// })