import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "app/product module/services/product-service.service";

@Component({
  selector: "app-products-admin",
  templateUrl: "./products-admin.component.html",
  styleUrls: ["./products-admin.component.scss"],
})
export class ProductsAdminComponent implements OnInit {
  listOfProducts: any = [];
  selectedProducts: any = [];
  arrayIds: number[] = [];

  constructor(private productService: ProductServiceService) {
    this.getAllProducts();
  }

  ngOnInit(): void {}

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.listOfProducts = response;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log("product deleted successfully");
      this.getAllProducts();
    });
  }

  deleteSelectedProduct() {
    this.productService
      .deleteSelectedProducts(this.arrayIds)
      .subscribe((response) => {
        console.log("products have been deleted successfully");
        this.getAllProducts();
      });
  }

  /*-----------------------------------------------------------------------------------------------------------*/
  addById(event) {
    const filterArray = this.selectedProducts.filter(
      (obj) => obj.id == event.data.id
    );
    this.arrayIds.push(filterArray[0].id);
  }

  removeById(event) {
    const idUnchecked = event.data.id;
    this.arrayIds = this.arrayIds.filter((item) => item !== idUnchecked);
  }

  addAllIds(event) {
    this.arrayIds = [];
    this.selectedProducts.forEach((element) => {
      this.arrayIds.push(element.id);
    });
  }
}
