import { Component } from '@angular/core';
//import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  //encapsulation: ViewEncapsulation.None,
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(){
  }

  ngOnInit(): void{
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  takeCard(){
    this.pickCardAnimation = true;

  }
}
