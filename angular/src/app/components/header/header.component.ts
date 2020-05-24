import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numProductInCart:number
  constructor(private myService:ProductServiceService) { }

  ngOnInit() {
    this.myService.cartProduct.subscribe((data)=>{
      this.numProductInCart= data.length;
    })
  }

}
