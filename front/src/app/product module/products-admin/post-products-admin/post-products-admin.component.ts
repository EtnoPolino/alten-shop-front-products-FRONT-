import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductServiceService } from "app/product module/services/product-service.service";

@Component({
  selector: "app-post-products-admin",
  templateUrl: "./post-products-admin.component.html",
  styleUrls: ["./post-products-admin.component.scss"],
})
export class PostProductsAdminComponent implements OnInit {
  productForm!: FormGroup;
  listOfInventoryStatus: any = ["INSTOCK", "LOWSTOCK", "OUTOFSTOCK"];
  listOfCategories: any = ["Accessories", "Clothing", "Fitness", "Electronics"];

  constructor(
    private fb: FormBuilder,
    private productService: ProductServiceService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      category: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      inventoryStatus: [null, [Validators.required]],
      rating: [null],
    });
  }

  ngOnInit(): void {}

  postProduit() {
    console.log(this.productForm.value);
    this.productService
      .postProduct(this.productForm.value)
      .subscribe((response) => {
        if (response.id != null) {
          this.router.navigateByUrl("admin");
        } else {
          throw new Error("Erreur... le produit ne s'est pas ajouté");
        }
      });
  }
}
