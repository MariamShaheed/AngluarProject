import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private productService:ProductServiceService) { }

  product
  ngOnInit() {
    let x=this.productService.pp
    if(x)
    this.product=x
    console.log(this.product)
  }
//   private clickHandler(event) {
//     console.log(this.clickHandler);
// }
// public text: string;
// onClick(){
//   console.log(this.text);
// }

title:string="x"
edit(){
  let product={
    title:this.title,

  }
  // this.productService.edit(product).subscribe((data:any)=>{
    // this.productService
  // })
}
}
