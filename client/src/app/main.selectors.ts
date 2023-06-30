import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectProductsState = createFeatureSelector<number>('products');
export const selectProductsList = createSelector(selectProductsState, (state: number) => state );

export const selectCustomersState = createFeatureSelector<any>('customers');
export const selectCustomersList = createSelector(selectCustomersState, (state: Array<any>) => [...state,{customerName:'created in selector'}] );

export const selectCountState = createFeatureSelector<number>('count');
export const selectCountState1 = createFeatureSelector<number>('count');
export const selectCountState2 = createFeatureSelector<number>('count');

export const selectCountList =
  createSelector(selectCountState, (state: number) => state * 50);

function blah(state:number){
    return state * 50
}