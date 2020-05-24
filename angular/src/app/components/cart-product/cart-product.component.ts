import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  constructor(private myservice:ProductServiceService) { }
@Input() product={}

  ngOnInit() {
  }
addItem(){
  console.log(this.product)
  this.myservice.addProduct(this.product)
}
}
