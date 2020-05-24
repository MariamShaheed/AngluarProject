import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  styleUrls: ['./cart-user.component.css']
})
export class CartUserComponent implements OnInit {

  constructor(private myservice:ProductServiceService) { }
  products=[]
  ngOnInit() {
    this.products=this.myservice.cartProductsArray
    console.log(this.products.length)
    
  }
   
}
