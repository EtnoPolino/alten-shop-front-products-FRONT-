import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "app/product module/services/product-service.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  layout: string = "list";

  constructor(private productService: ProductServiceService) {
    this.getAllProducts();
  }

  ngOnInit(): void {}

  getAllProducts() {
    this.productService.getAllProductsPageProduct().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }

  getSeverity(product: any) {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  }
}
