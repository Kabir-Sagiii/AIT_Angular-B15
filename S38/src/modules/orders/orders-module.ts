import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrder } from './create-order/component/create-order/create-order';



@NgModule({
  declarations: [
    CreateOrder
  ],
  imports: [
    CommonModule
  ],
  exports:[CreateOrder]
})
export class OrdersModule { }
