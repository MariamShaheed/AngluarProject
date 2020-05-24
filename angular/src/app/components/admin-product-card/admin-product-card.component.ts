import { Component, OnInit,Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-product-card',
  templateUrl: './admin-product-card.component.html',
  styleUrls: ['./admin-product-card.component.css']
})
export class AdminProductCardComponent implements OnInit {

  name = 'Angular';
  enableEdit = false;
  enableEditIndex = null;
  constructor(private myService:ProductServiceService,private myRouter:Router) { }
  productDB={}
  producLink:string;
  @Input() product={}
  ngOnInit() {

     
    }

goToEdit(){
  this.myService.ppadd.next(this.product)
  //console.log(this.product)
  this.myRouter.navigate(['/EditProduct'])
}



edit(){
 // this.myService.ppadd.next(this.product)
  //console.log(this.product)
  this.myRouter.navigate(['/EditProduct'])
  this.myService.editProduct(this.product).subscribe(
    (response:any)=>{
      console.log(response)
      this.productDB=response
      this.myService.editProduct(response.product);
      this.producLink=`/EditProduct/${this.productDB[0].title}`
 console.log(this.product);

    },
    (err)=>{
      console.log(err)
      
    }
   
  )
}



 

}
