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
    this.restProvider.getKategoriak().subscribe((kategoriak : Kategoria[])=>{

      this.kategoriak = kategoriak;
      
      });
  }
  onGetKategoriak(){

    return this.restProvider.getKategoriak()
  }

  onGetKategoria(id){

    return this.restProvider.getKategoriaById(id)
  }

  onCreateKategoria(data) {

    this.restProvider.addKategoria(data).subscribe();
  }

  onUpdateProduct(kategoria) {
    this.restProvider.updateKategoria(kategoria).subscribe((updatedKategoria) => {
      
    });
  }

  onRemoveProduct(kategoria) {
    this.restProvider.deleteKategoriaById(kategoria.id).subscribe(() => {
      this.kategoriak = this.kategoriak.filter((e) =>  e.id !== kategoria.id);
    });
  }
}
