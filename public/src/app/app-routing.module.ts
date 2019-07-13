import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'products/edit/:id', component: EditComponent},
  { path: 'products/new', component: NewComponent},
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
