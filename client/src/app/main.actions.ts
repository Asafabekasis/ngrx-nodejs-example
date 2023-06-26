import { createAction, props, createActionGroup } from '@ngrx/store';

export const getProductsAction = createAction(
  '[Main Component get products] products'
);
export const productsAction = createAction(
  '[main.effect follow Main Component get products] products',
  props<any>()
);
export const addProductEffect = createAction(
  '[Main Component put default product',
  props<any>()
);
export const putProductAction = createAction(
  'main.effect follow Main Component put default product',
  props<any>()
);

export const productChangeActive = createAction(
    'Change Product Active',
    props<any>()
  );

export const getCustomersAction = createAction(
  '[Main Component get customers] customers'
);
export const customersAction = createAction(
  '[main.effect follow Main Component get products] customers',
  props<any>()
);

export const customerChangeActive = createAction(
    'Change Customer Active',
    props<any>()
  );
