import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomeComponent } from './pages/home/home.component';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class App {

  private rootPage: any;

  constructor(private platform: Platform) {

    this.rootPage = HomeComponent;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(App)
