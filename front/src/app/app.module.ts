import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeEn from "@angular/common/locales/en";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "app/app-routing.module";
import { AppComponent } from "app/app.component";
import { BaseModule } from "app/base/base.module";
import { SharedModule } from "app/shared/shared.module";
import { ProductsAdminComponent } from "./product module/products-admin/products-admin/products-admin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostProductsAdminComponent } from "./product module/products-admin/post-products-admin/post-products-admin.component";
import { UpdateProductAdminComponent } from "./product module/products-admin/update-product-admin/update-product-admin.component";
import { ProductsComponent } from "./product module/products/products/products.component";
import { ButtonModule } from "primeng/button";
import { DataViewModule } from "primeng/dataview";
import { TagModule } from "primeng/tag";
import { RatingModule } from "primeng/rating";

@NgModule({
  declarations: [
    AppComponent,
    ProductsAdminComponent,
    PostProductsAdminComponent,
    UpdateProductAdminComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en" }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEn, "en");
  }
}
