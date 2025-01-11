import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Game } from '../../../src/models/game';
import { GameDescriptionComponent } from '../game-description/game-description.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayerComponent } from '../player/player.component';
import { Firestore, doc, docData, updateDoc } from '@angular/fire/firestore';
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
  game!: Game;
  gameId: string | undefined;

  constructor(public dialog: MatDialog,
    private firestore: Firestore,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log('parameters: ', params['id']);
      this.gameId = params['id'];
      if (this.gameId) {
        const gameDocRef = doc(this.firestore, `games/${this.gameId}`);
        this.gameData$ = docData(gameDocRef);
        this.gameData$.subscribe((game) => {
          console.log('Game update: ', game);
          this.game.players = game.players,
            this.game.stack = game.stack,
            this.game.playedCards = game.playedCards,
            this.game.currentPlayer = game.currentPlayer,
            this.game.pickCardAnimation = game.pickCardAnimation,
            this.game.currentCard = game.currentCard
        });
      }
    });
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.saveGame();
      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1000)
    }
  }

  saveGame() {
    const gameDocRef = doc(this.firestore, `games/${this.gameId}`);
    updateDoc(gameDocRef, this.game.toJson())
      .then(() => {
        console.log('Game successfully saved.');
      })
      .catch((error) => {
        console.error('Error saving game: ', error);
      });
  }
  @ViewChild('addButton') addButton!: ElementRef<HTMLButtonElement>;

  openDialog(): void {
    if (this.addButton) {
      this.addButton.nativeElement.blur();
    }
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.saveGame();
      }
    });
  }
}