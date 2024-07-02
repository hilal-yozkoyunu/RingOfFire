import { Component } from '@angular/core';
//import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';


@Component({ 
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    GameInfoComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  //encapsulation: ViewEncapsulation.None,
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(public dialog: MatDialog){
  }

  ngOnInit(): void{
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  takeCard(){
    if (!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;


      setTimeout(()=>{
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      },1000);
    
    }
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0 ){
        this.game.players.push(name);
      } 
    });
  }
}
