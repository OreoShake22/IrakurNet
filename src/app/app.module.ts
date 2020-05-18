import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { RestService } from  '../app/providers/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/header/header.component';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  
  entryComponents: [],
  imports: [HttpClientModule,BrowserModule, HttpModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,
    ReactiveFormsModule, IonicStorageModule.forRoot()],
    
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RestService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
