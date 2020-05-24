import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

   
  constructor(private myService:ProductServiceService) { }

  products=[]
  ngOnInit() {
      this.getProducts();
      //this.editProducts()
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

  // editProducts()
  // {
  //   this.myService.editProduct().subscribe((products:[])=>{
  //     this.products=products;
  //     console.log(products);
  //   },
  //   (err)=>{
  //     console.log(err);
  //   }
  //   ) 
  // }
}

