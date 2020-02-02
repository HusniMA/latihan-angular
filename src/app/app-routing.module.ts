import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { ProductComponent } from './Pages/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'product',
    component: ProductComponent
  },
  { path: 'detail/:id', component: DetailComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
