import { Injectable } from '@angular/core';
import { RestService } from  './../providers/rest.service';
import { NavController } from '@ionic/angular';
import { User } from '../Models/User'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private  user : User[] = [];
  constructor(public  navCtrl: NavController, public  restProvider: RestService) { 
  }

  onGetUsuario(data){

    return this.restProvider.getUsers(data)
  }

  onCreateUsuario(data) {

    this.restProvider.addUser(data).subscribe();
  }

  onUpdateUsuario(user) {
    this.restProvider.updateKategoria(user).subscribe((updatedKategoria) => {
      
    });
  }

  onRemoveUsuario(user) {
    this.restProvider.deleteKategoriaById(user.id).subscribe(() => {
      this.user = this.user.filter((e) =>  e.id !== user.id);
    });
  }
}
