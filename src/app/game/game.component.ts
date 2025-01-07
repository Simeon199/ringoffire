import { Component, OnInit } from '@angular/core';
// import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Game } from '../../../src/models/game';
import { GameDescriptionComponent } from '../game-description/game-description.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayerComponent } from '../player/player.component';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    MatIconModule,
    GameDescriptionComponent,
    PlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: any = '';
  game!: Game;

  constructor(public dialog: MatDialog, private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.newGame();
    this.firestoreService.getGames().subscribe(games => {
      console.log("Aktuelle Spiele: ", games);
    });
  }

  newGame() {
    this.game = new Game();
    this.firestoreService.addGame(this.game.toJson()); // this.game
    // console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}