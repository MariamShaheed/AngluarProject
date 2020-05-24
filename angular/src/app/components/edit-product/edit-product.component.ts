import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
constructor(private productService:ProductServiceService) { }

  product={
    title:"kkkkkkkkkkkkkk",
    price:0,
    picture:"pppppppppppp",
    details:"dddddddddddd"
  }
  

  ngOnInit() {
     
    
  }
 
title:string=this.product.title;
price:number=this.product.price;
picture:string=this.product.picture;
details:string=this.product.details;
}
