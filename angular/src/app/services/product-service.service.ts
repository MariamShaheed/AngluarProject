import { Injectable } from '@angular/core';
import{ HttpClient} from "@angular/common/http"
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({

  providedIn: 'root'
})

export class ProductServiceService {
  delete(id: any) {
    throw new Error("Method not implemented.");
  }
private productdata=JSON.parse(localStorage.getItem('productvalue')||'false')
  constructor(private myhttp:HttpClient) { }

  baseUrl:string ="http://localhost:3000/api/products";
  //editUrl:string ="http://localhost:3000/api/products/Patch";
  cartProductsArray=[]
  cartProduct=new BehaviorSubject(this.cartProductsArray)
  pp={}
  ppadd=new BehaviorSubject(this.pp)

  addProduct(product){
    this.cartProductsArray.push(product)
    console.log(this.cartProductsArray)
    this.cartProduct.next(this.cartProductsArray)
    
  }
  
  editProduct(product)
  {
    return this.myhttp.get(`${this.baseUrl}/patch/${Title}`)
  }
  removeProduct(product){

    this.cartProductsArray.pop()
   return this.myhttp.delete(this.baseUrl);

  }

 
  getProduct()
  {
   return this.myhttp.get(this.baseUrl);
  }

setProduct(product:any)
{
  localStorage.setItem("product",product)
}
setProductData(value:boolean)
{
this.productdata=value
localStorage.setItem('haveData','true')
}
getHaveProduct(){
  return JSON.parse(localStorage.getItem('haveData')||this.productdata.toString())
}


///////////////////


createEmployee(employee: Object): Observable<Object> {
  return this.myhttp.post(`${this.baseUrl}`, employee);
}

deleteProduct(id: number): Observable<any> {
  return this.myhttp.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}


getProductList(): Observable<any> {
  return this.myhttp.get(`${this.baseUrl}`)
}
updateEmployee(id: number, value: any): Observable<Object> {
  return this.myhttp.put(`${this.baseUrl}/${id}`, value);
}

}
