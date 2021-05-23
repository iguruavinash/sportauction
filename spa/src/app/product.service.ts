import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

  }
  saveProduct(product:any){
      return this.http.post("http://localhost:9017/admin/addProduct",product);
  }

  getAllProducts(){
    return this.http.get("http://localhost:9017/admin/allProducts");
  }

  deleteProduct(pid:any){
    return this.http.delete("http://localhost:9017/admin/deleteProduct/"+pid);
  }
  updateProduct(pid:any, data:any){
    return this.http.put("http://localhost:9017/admin/updateProduct/"+pid, data);
  }
  getProductById(pid:any){
    return this.http.get("http://localhost:9017/admin/getProductById/"+pid);
  }  
}