import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {CategoryListComponent} from "./category/category-list.component";
import {CategoryTitlePipe} from "../pipes/category.pipe";
import {CategoryCardComponent} from "./category/category-card.component";
import {CategorySlideComponent} from "./category/category-slide.component";

@NgModule({
  imports: [
    BrowserModule, CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryTitlePipe,
    CategoryCardComponent,
    CategorySlideComponent
  ],
  exports: [
    CategoryListComponent,
    CategoryTitlePipe,
    CategoryCardComponent,
    CategorySlideComponent
  ]
})
export class ShopModule { }
