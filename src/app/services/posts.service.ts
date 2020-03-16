import { Injectable } from '@angular/core';
import { RestService } from  './../providers/rest.service';
import { NavController } from '@ionic/angular';
import { Product } from '../Models/model'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private  products : Product[] = [];
  constructor(public  navCtrl: NavController, public  restProvider: RestService) { 
    this.restProvider.getProducts().subscribe((products : Product[])=>{

      this.products = products;
      
      });
  }

  onCreateProduct(product) {

    this.restProvider.createProduct(product).subscribe((newProduct) => {
      this.products = this.products.concat(newProduct);
    });
  }

  onUpdateProduct(product) {
    this.restProvider.updateProduct(product).subscribe((updatedProduct) => {
      
    });
  }

  onRemoveProduct(product) {
    this.restProvider.deleteProductById(product.id).subscribe(() => {
      this.products = this.products.filter((e) =>  e.id !== product.id);
    });
  }
}
