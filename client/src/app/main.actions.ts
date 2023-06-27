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
export const addProductAction = createAction(
  'main.effect follow Main Component put default product',
  props<any>()
);

export const productChangeActive = createAction(
    'Change Product Active',
    props<any>()
  );

export const deleteProduct = createAction(
  'Delete Product Active',
    props<any>()
);

//============================================================================================================================>

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

  export const addCustomerEffect = createAction(
    'add Customer Effect',
    props<any>()
);

export const addCustomerAction = createAction(
    'add Customer Action',
    props<any>()
);

export const deleteCustomer = createAction(
  'Delete Customer Active',
    props<any>()
);

//============================================================================================================================>

export const getAnyEffect = createAction(
  'Get Type',
    props<any>()
);

