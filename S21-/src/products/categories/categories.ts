import { Component } from '@angular/core';
import { Category } from '../category/category';
@Component({
  selector: 'app-categories',
  imports: [Category],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
categories = [
    {url:"https://cdn.textstudio.com/output/sample/normal/9/2/0/5/all-logo-275-5029.png",category:"all"},
    {url:"https://img.freepik.com/premium-photo/collection-electronic-devices-black-background-generative-ai_893571-1990.jpg?w=740",category:"electronics"},{url:"https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Trenchcoat.jpg",category:"men's clothing"},
    {url:"https://t4.ftcdn.net/jpg/04/72/44/67/360_F_472446747_AmtV7OdEJVyzVRFsVTjVHhIiFV00bMNr.jpg",category:"women's clothing"},{url:"https://static.vecteezy.com/system/resources/previews/027/110/402/non_2x/fashion-model-kids-free-photo.jpg",category:"kids"},{url:"https://7esl.com/wp-content/uploads/2017/12/chairs-vocabulary.jpg",category:"furniture"},{url:"https://static.vecteezy.com/system/resources/thumbnails/045/907/153/small_2x/cosmetics-arranged-on-pink-background-free-photo.jpeg",category:"cosmetic"}]
}
