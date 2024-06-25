import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductServiceService } from "app/product module/services/product-service.service";

@Component({
  selector: "app-update-product-admin",
  templateUrl: "./update-product-admin.component.html",
  styleUrls: ["./update-product-admin.component.scss"],
})
export class UpdateProductAdminComponent implements OnInit {
  id: number = this.activatedRoute.snapshot.params["id"];
  updateProductForm!: FormGroup;
  listOfInventoryStatus: any = ["INSTOCK", "LOWSTOCK", "OUTOFSTOCK"];
  listOfCategories: any = ["Accessories", "Clothing", "Fitness", "Electronics"];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductServiceService,
    private router: Router
  ) {
    this.getProductById();
    this.updateProductForm = this.fb.group({
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

  getProductById() {
    this.productService.getProductById(this.id).subscribe((response) => {
      this.updateProductForm.patchValue(response);
    });
  }

  updateProduit() {
    this.productService
      .updateProduct(this.id, this.updateProductForm.value)
      .subscribe((response) => {
        if (response.id != null) {
          this.router.navigateByUrl("/admin");
        } else {
          throw new Error("Erreur... le produit ne s'est pas update");
        }
      });
  }
}
