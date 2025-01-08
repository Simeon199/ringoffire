import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { GameComponent } from '../game/game.component';
import { GameData } from '../../models/game';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    constructor(private firestore: Firestore) { }
    games: any;

    getGames(): Observable<any[]> {
        let gamesCollection = this.getGamesRef();
        return collectionData(gamesCollection, { idField: 'id' });
        // return collectionData(gamesCollection);
    }

    invokeFirestore(arg: any) {
        arg = this.firestore;
    }

    getGamesRef() {
        return collection(this.firestore, 'games');
    }

    // getGameById(gameId: string): Observable<any> {
    //     const gameDocRef = doc(this.firestore, `game/${gameId}`);
    //     return docData(gameDocRef);
    // }

    async addGame(newGame: GameData) {
        const gamesCollection = collection(this.firestore, 'games');
        await addDoc(gamesCollection, newGame);
    }
}
