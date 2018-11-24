import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {CategoryListComponent} from "./category/category-list.component";
import {CategoryTitlePipe} from "../pipes/category.pipe";
import {CategoryCardComponent} from "./category/category-card.component";
import {CategorySlideComponent} from "./category/category-slide.component";

import { ProductListComponent } from "./product/product-list.component";
import { ProductViewComponent } from "./product/product-view.component";
import { ProductCardComponent } from "./product/product-card.component";
import { ProductSearchComponent } from "./product/product-search.component";
import { ProductGridComponent } from "./product/product-grid.component";

import { CartItemCountComponent } from "./cart/cart-item-count.component";
import { CartMenuComponent } from "./cart/cart-menu.component";
import { CartViewComponent } from "./cart/cart-view.component";

import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule, CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule, BsDropdownModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryTitlePipe,
    CategoryCardComponent,
    CategorySlideComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductCardComponent,
    ProductSearchComponent,
    ProductGridComponent,
    CartItemCountComponent,
    CartMenuComponent,
    CartViewComponent
  ],
  exports: [
    CategoryListComponent,
    CategoryTitlePipe,
    CategoryCardComponent,
    CategorySlideComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductCardComponent,
    ProductSearchComponent,
    ProductGridComponent,
    CartItemCountComponent,
    CartMenuComponent,
    CartViewComponent
  ]
})
export class ShopModule { }
