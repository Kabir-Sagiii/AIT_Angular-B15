import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Products } from '../products/products';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';
import { ContactUs } from './contact-us/contact-us';
import { Cart } from './cart/cart';
import { Profile } from './feature/profile/components/profile/profile';
import { PersonalDetails } from './feature/profile/components/personal-details/personal-details';
import { Orders } from './feature/profile/components/orders/orders';
import { Payments } from './feature/profile/components/payments/payments';
import { Favourites } from './feature/profile/components/favourites/favourites';
import { ChangePassword } from './feature/profile/components/change-password/change-password';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Reactivef } from './reactivef/reactivef';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'signin', component: Signin },
  { path: 'signup', component: Reactivef },
  {
    path: 'profile',
    component: Profile,
    children: [
      { path: '', redirectTo: 'p-details', pathMatch: 'full' },
      { path: 'p-details', component: PersonalDetails },
      { path: 'orders', component: Orders },
      { path: 'payments', component: Payments },
      { path: 'favourited', component: Favourites },
      { path: 'c-password', component: ChangePassword },
    ]
  },
  { path: 'cart', component: Cart },
  { path: 'contactus', component: ContactUs },
  {path:"**",component:Pagenotfound}
];
