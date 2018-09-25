import { NgModule } from '@angular/core';

import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { CartService } from './cart.service';

@NgModule({
    imports: [
    ],
    providers: [
        ProductService,
        CategoryService,
        CartService
   ]
})
export class ServicesModule { }
