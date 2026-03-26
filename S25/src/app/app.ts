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
@Component({
  selector: 'app-root',
  imports: [ProductDetails,Comp1,Comp2,Details,Parent,RouterOutlet,AttributeDir,Switchdir,Products,StructuralD,FormsModule,Twoway,Home,Profilecard,Divcontainer,Bindingtask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}
