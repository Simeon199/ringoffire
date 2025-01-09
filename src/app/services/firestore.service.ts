import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { GameComponent } from '../game/game.component';
// import { GameData } from '../../models/game';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    constructor(private firestore: Firestore) { }
    games: any;

    getGames(): Observable<any[]> {
        let gamesCollection = this.getGamesRef();
        return collectionData(gamesCollection, { idField: 'id' });
    }

    getGamesRef() {
        return collection(this.firestore, 'games');
    }

    getSingleDocRef(colId: string, docId: string) {
        return doc(collection(this.firestore, colId), docId);
    }

    // async addGame(newGame: GameData) {
    //     const gamesCollection = collection(this.firestore, 'games');
    //     await addDoc(gamesCollection, newGame);
    // }
}
