import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    EditCustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
