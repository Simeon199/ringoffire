import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Game } from '../../../src/models/game';
import { GameDescriptionComponent } from '../game-description/game-description.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayerComponent } from '../player/player.component';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


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
  gameData$: Observable<any> | undefined;
  pickCardAnimation = false;
  currentCard: any = '';
  game!: Game;

  constructor(public dialog: MatDialog,
    private firestore: Firestore,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log('parameters: ', params['id']);
      const gameId = params['id'];
      if (gameId) {
        const gameDocRef = doc(this.firestore, `games/${gameId}`);
        this.gameData$ = docData(gameDocRef);
        this.gameData$.subscribe((game) => {
          console.log('Game update: ', game);
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.stack = game.stack;
        });
      }
    });
  }

  newGame() {
    this.game = new Game();
  }

  updateGameFromFirestore(game: any): void {
    this.game.currentPlayer = game.currentPlayer;
    this.game.playedCards = game.playedCards;
    this.game.players = game.players;
    this.game.stack = game.stack;
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