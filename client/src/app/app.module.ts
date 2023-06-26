import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './main.effect';
import { productsReducer, customersReducer } from './main.reducer';

@NgModule({
  declarations: [AppComponent, MainComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      products: productsReducer,
      customers: customersReducer,
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([MainEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
