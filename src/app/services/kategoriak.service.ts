import { Injectable } from '@angular/core';
import { RestService } from  './../providers/rest.service';
import { NavController } from '@ionic/angular';
import { Kategoria } from '../Models/kategoria'

@Injectable({
  providedIn: 'root'
})
export class KategoriakService {
  private  kategoriak : Kategoria[] = [];
  constructor(public  navCtrl: NavController, public  restProvider: RestService) { 
    this.restProvider.getProducts().subscribe((kategoriak : Kategoria[])=>{

      this.kategoriak = kategoriak;
      
      });
  }

  onCreateKategoria(kategoria) {

    this.restProvider.createProduct(kategoria).subscribe((newKategoria) => {
      this.kategoriak = this.kategoriak.concat(newKategoria);
    });
  }

  onUpdateProduct(kategoria) {
    this.restProvider.updateProduct(kategoria).subscribe((updatedKategoria) => {
      
    });
  }

  onRemoveProduct(kategoria) {
    this.restProvider.deleteProductById(kategoria.id).subscribe(() => {
      this.kategoriak = this.kategoriak.filter((e) =>  e.id !== kategoria.id);
    });
  }
}
