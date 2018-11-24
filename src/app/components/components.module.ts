import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
/*
 * Components
 */
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
  imports: [
    BrowserModule, CommonModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    CheckoutComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CheckoutComponent
  ]
})
export class ComponentsModule { }
