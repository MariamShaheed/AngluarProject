import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ProductServiceService} from "./services/product-service.service"
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import{HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router'
import {Routes} from '@angular/router'

import { FeatureSliderComponent } from './components/feature-slider/feature-slider.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
 
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartUserComponent } from './components/cart-user/cart-user.component';
 
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminProductCardComponent } from './components/admin-product-card/admin-product-card.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
 const routes:Routes = [
  {component:HomeComponent,path:'home'},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {component:AboutComponent,path:'about'},

   {component:FeatureSliderComponent,path:'slider'},
   {component: ProductGridComponent,path:'product'},
   {component: CartUserComponent,path:'cart'},
   {component: AdminProductListComponent ,path:'AdminProduct'},
   {component:  EditProductComponent ,path:'EditProduct'},
   {component:  AddProductComponent ,path:'addProduct'},




   




 ]

@NgModule({
  declarations: [
    AppComponent,
    FeatureSliderComponent,
    ProductGridComponent,
  
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CartUserComponent,
     
    CartProductComponent,
    AdminProductListComponent,
    AdminProductCardComponent,
    AddProductComponent,
    EditProductComponent,
     
  
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule ,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
