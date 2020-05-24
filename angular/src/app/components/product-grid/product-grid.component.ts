import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
 

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor(private myService:ProductServiceService) { }
  products=[]
ngOnInit() {
    this.getProducts();
  }
  
 getProducts()
  {
    this.myService.getProduct().subscribe((products:[])=>{
      this.products=products;
      //console.log(products);
    },
    (err)=>{
      console.log(err);
    }
    ) 
  } 

}
