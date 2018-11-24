/*
 * Angular Imports
 */
import { Routes, RouterModule } from "@angular/router";

/*
 * Guards
 */
//import { AuthGuard } from "./auth/auth.module";

/*
 * Components
 */
import { WelcomeComponent } from "./welcome/welcome.component";
// import { SignInComponent} from "./auth/sign-in.component";
import { ProductListComponent } from "./shop/product/product-list.component";
import { ProductViewComponent } from "./shop/product/product-view.component";
import { CartViewComponent } from "./shop/cart/cart-view.component";
//import { CheckoutViewComponent } from "./checkout/checkout-view.component";

/*
 * Routes
 */
const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  //{ path: "login", component: SignInComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "products", component: ProductListComponent},
  { path: "products/:id", component: ProductViewComponent},
  { path: "cart", component: CartViewComponent},
  // { path: "checkout", component: CheckoutViewComponent, canActivate: [AuthGuard] },
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
