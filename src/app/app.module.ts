import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import {ComprasService} from "./compras.service";
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: NovoComponent },
  { path: 'lista', component: ListaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NovoComponent,
    ListaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
