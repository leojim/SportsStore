
import {Routes, RouterModule} from '@angular/router';
import { ProductSelectionComponent } from './store/productSelection.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutDetailsComponent } from './store/checkout/checkOutDetails.component';
import { CheckoutPaymentComponent } from './store/checkout/checkoutPayment.component';
import { CheckoutSummaryComponent } from './store/checkout/checkoutSummary.component';
import { OrderConfirmationComponent } from './store/checkout/orderConfirmation.component';

// import { ProductTableComponent } from './structure/productTable.component';
// import { ProductDetailComponent } from './structure/productDetail.component';

const routes: Routes = [
  // {path: 'table', component: ProductTableComponent},
  // {path: 'detail/:id', component: ProductDetailComponent},
  // {path: 'detail', component: ProductDetailComponent},
  // {path: '', component: ProductTableComponent}
  { path: 'checkout/step1', component: CheckoutDetailsComponent},
  { path: 'checkout/step2', component: CheckoutPaymentComponent},
  { path: 'checkout/step3', component: CheckoutSummaryComponent},
  { path: 'check/confirmation', component: OrderConfirmationComponent},
  { path: 'checkout', component: CheckoutDetailsComponent},
  { path: 'cart', component: CartDetailComponent},
  { path: 'store', component: ProductSelectionComponent},
  { path: '', component: ProductSelectionComponent}
];

export const RoutingConfig = RouterModule.forRoot(routes);
