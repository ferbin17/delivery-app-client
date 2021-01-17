import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../global.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit() {
  }

}
