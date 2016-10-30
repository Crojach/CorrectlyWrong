import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameComponent} from '../game/game.component';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomeComponent {
  constructor(private navController: NavController) {

  }
  startGame(): void {

    this.navController.push(GameComponent);
  }
}
