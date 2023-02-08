import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  //ovde na order klik iz order servia izbrises produkte i izbacis poruku sucesful order
  constructor(private orderServ: OrderService) {}
  prod: Array<any>;
  ngOnInit() {
    this.prod = this.orderServ.getProd();
  }
}
