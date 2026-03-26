import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import {Profilecard} from "../data-binding/Interpolation/profilecard/profilecard"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Profilecard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}
