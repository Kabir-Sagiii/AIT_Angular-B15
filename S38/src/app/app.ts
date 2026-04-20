import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Details } from '../Output-Decorator/details/details';
import { AttributeDir } from '../attribute-dir/attribute-dir';
import { Switchdir } from '../switchdir/switchdir';
import { Parent } from '../Input-Decorator/parent/parent';
import { Home } from '../home/home';
import { Products } from '../products/products';
import {Profilecard} from "../data-binding/Interpolation_PropertyBinding/profilecard/profilecard"
import { Divcontainer } from '../data-binding/Event-Binding/divcontainer/divcontainer';
import { Bindingtask } from '../data-binding/Event-Binding/bindingtask/bindingtask';
import { Twoway } from '../data-binding/twoway/twoway';
import { FormsModule } from '@angular/forms';
import { StructuralD } from '../structural-d/structural-d';
import {Comp1} from "../services/comp1/comp1"
import { Comp2 } from '../services/comp2/comp2';
import { ProductDetails } from '../product-details/product-details';
import { Users } from '../api-integration/users/users';
import { Product } from "../products/product/product";
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';
import { ContactUs } from './contact-us/contact-us'
import { Cart } from './cart/cart';
import { Nav } from "../home/nav/nav";
import { UserModule } from '../modules/user/user-module';
import { OrdersModule } from '../modules/orders/orders-module';
@Component({
  selector: 'app-root',
  imports: [OrdersModule,UserModule,Signup, Cart, ContactUs, Signin, Users, ProductDetails, Comp1, Comp2, Details, Parent, RouterOutlet, AttributeDir, Switchdir, Products, StructuralD, FormsModule, Twoway, Home, Profilecard, Divcontainer, Bindingtask, Product, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}
