import { Component } from '@angular/core';
import { Nav } from './nav/nav';
import { Ad } from './ad/ad';
import { Trendingproduct } from './trendingproduct/trendingproduct';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-home',
  imports: [Nav,Trendingproduct,Ad,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
