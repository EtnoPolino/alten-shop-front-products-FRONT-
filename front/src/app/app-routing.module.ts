import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./product module/products/products/products.component";
import { ProductsAdminComponent } from "./product module/products-admin/products-admin/products-admin.component";
import { PostProductsAdminComponent } from "./product module/products-admin/post-products-admin/post-products-admin.component";
import { UpdateProductAdminComponent } from "./product module/products-admin/update-product-admin/update-product-admin.component";

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "admin", component: ProductsAdminComponent },
  { path: "admin/produit", component: PostProductsAdminComponent },
  { path: "admin/produit/:id/edit", component: UpdateProductAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
