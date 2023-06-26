import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  {path:'home',component:HomeComponent},
  {path:'main',component:MainComponent},
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
