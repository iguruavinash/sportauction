import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  apiResponse: any;

  allProducts: any;

  productDetails: any;

  productId: any
  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      response => {
        console.log(response);
        this.allProducts = response;
      }
    )
    // this.router.getProductById().subscribe({
      
    // });
  }

  addProduct(form: any) {
    let formData = form.value;
    formData.reviews = [];
    formData.product_specifications = [];
    formData.offers = [];
    console.log('after modification', formData);

    this.productService.saveProduct(formData).subscribe(
      response => {
        console.log(response);
        this.apiResponse = response;
        if (this.apiResponse.status) {
          this.productService.getAllProducts().subscribe(
            response => {
              console.log(response);
              this.allProducts = response;
            }
          )
        }

      }
    )
  }

  deleteProduct(pid: any) {
    console.log('pid', pid);
    this.productService.deleteProduct(pid).subscribe(
      response => {
        if (response) {
          this.productService.getAllProducts().subscribe(
            response => {
              console.log(response);
              this.allProducts = response;
            }
          )
        }
      }
    )
  }

  editProduct(pid: any) {
    console.log("pid", pid);
    this.router.params.subscribe((data: any) => {
      console.log(data)
     
      // this.productId = data.pid;
      // this.productService.getProductById(this.router.snapshot.params.id).subscribe(productData => {
      //   this.productDetails = productData; // get the existing data of the product
      //   console.log(this.productDetails);
      // });
    });
  }

  // updateProduct(form:any){
  //   const updateProduct={
  //     pid:form.value.pid,
  //     product_name:form.value.product_name,
  //     price:form.value.price,
  //     product_image:form.value.product_image,
  //     category:form.value.category,
  //     sub_category:form.value.sub_category,
  //     seller:form.value.seller
  //   }
  //   console.log(form);
  //   this.productService.updateProduct(this.productId, updateProduct).subscribe(data=>{
  //     console.log(data);
  //   });
  // }

}
