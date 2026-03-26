import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Switchdir } from '../switchdir/switchdir';
import { Home } from '../home/home';
import { Products } from '../products/products';
import {Profilecard} from "../data-binding/Interpolation_PropertyBinding/profilecard/profilecard"
import { Divcontainer } from '../data-binding/Event-Binding/divcontainer/divcontainer';
import { Bindingtask } from '../data-binding/Event-Binding/bindingtask/bindingtask';
import { Twoway } from '../data-binding/twoway/twoway';
import { FormsModule } from '@angular/forms';
import { StructuralD } from '../structural-d/structural-d';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Switchdir,Products,StructuralD,FormsModule,Twoway,Home,Profilecard,Divcontainer,Bindingtask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}
