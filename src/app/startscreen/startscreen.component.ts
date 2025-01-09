import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from '../../models/game';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  constructor(private router: Router, private firestore: Firestore) { }
  ngOnInit(): void {

  }

  async newGame() {
    let game = new Game();
    try {
      const docRef = await addDoc(collection(this.firestore, 'games'), game.toJson());
      await this.router.navigateByUrl(`/game/${docRef.id}`);
      // addDoc(collection(this.firestore, 'games'), game.toJson);
      // this.router.navigateByUrl('/game');
    }
    catch (err) {
      console.error('Fehler beim Hinzufügen des Spiels: ', err);
    }
  }

}