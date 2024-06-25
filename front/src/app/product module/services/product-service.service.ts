import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import data from "assets/products.json";
import { map, Observable } from "rxjs";

// const base_url = "../assets/products.json";
const base_url = "http://localhost:8080/";

@Injectable({
  providedIn: "root",
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  postProduct(productDto: any): Observable<any> {
    return this.http.post(base_url + "admin/produit", productDto);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(base_url + "admin");
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(base_url + "admin/" + id);
  }

  deleteSelectedProducts(ids: number[]): Observable<any> {
    return this.http.delete(base_url + "admin/produits/" + ids);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(base_url + "admin/" + id);
  }

  updateProduct(id: number, productDto: any): Observable<any> {
    return this.http.put(base_url + "admin/produit/" + id, productDto);
  }

  /*------------------------ page products --------------------------- */
  getAllProductsPageProduct(): Observable<any> {
    return this.http.get(base_url + "products");
  }
}
